// Service Worker pour cache des stats
const CACHE_NAME = 'ardent-stats-cache-v1';
const STATS_API_URL = `${import.meta.env.VITE_PB_URL}/api/collections/stats_view/records`;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Installation du SW
self.addEventListener('install', (event) => {
  console.log('[SW] Installing stats cache service worker');
  self.skipWaiting();
});

// Activation du SW
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating stats cache service worker');
  event.waitUntil(self.clients.claim());
});

// Fonction pour faire l'appel API réel
async function fetchStatsFromAPI() {
  try {
    console.log('[SW] Fetching fresh stats from API');
    const response = await fetch(STATS_API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transformer les données au format attendu
    if (data.items && data.items.length > 0) {
      const statsRecord = data.items[0];
      return {
        total_users_verified: statsRecord.total_users_verified || 0,
        total_themes: statsRecord.total_themes || 0,
        total_hours_content: statsRecord.total_hours_content || 0,
        total_published_resources: statsRecord.total_published_resources || 0,
        total_views: statsRecord.total_views || 0,
        timestamp: Date.now()
      };
    } else {
      return {
        total_users_verified: 0,
        total_themes: 0,
        total_hours_content: 0,
        total_published_resources: 0,
        total_views: 0,
        timestamp: Date.now()
      };
    }
  } catch (error) {
    console.error('[SW] Error fetching stats:', error);
    throw error;
  }
}

// Fonction pour récupérer les stats du cache
async function getCachedStats() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match('stats-data');
    
    if (cachedResponse) {
      const cachedData = await cachedResponse.json();
      const age = Date.now() - cachedData.timestamp;
      
      // Si le cache est encore valide (moins de 5 minutes)
      if (age < CACHE_DURATION) {
        console.log('[SW] Serving stats from cache, age:', Math.round(age / 1000), 'seconds');
        return cachedData;
      } else {
        console.log('[SW] Cache expired, age:', Math.round(age / 1000), 'seconds');
      }
    }
    
    return null;
  } catch (error) {
    console.error('[SW] Error reading cache:', error);
    return null;
  }
}

// Fonction pour mettre en cache les stats
async function cacheStats(statsData) {
  try {
    const cache = await caches.open(CACHE_NAME);
    const response = new Response(JSON.stringify(statsData), {
      headers: { 'Content-Type': 'application/json' }
    });
    await cache.put('stats-data', response);
    console.log('[SW] Stats cached successfully');
  } catch (error) {
    console.error('[SW] Error caching stats:', error);
  }
}

// Intercepter les requêtes pour les stats
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Intercepter seulement les requêtes vers nos stats
  if (url.pathname === '/api/stats' || 
      (url.hostname === '127.0.0.1' && url.pathname.includes('/api/collections/stats_view'))) {
    
    event.respondWith(
      (async () => {
        try {
          // Vérifier le cache d'abord
          let cachedStats = await getCachedStats();
          
          if (cachedStats) {
            // Retourner les données en cache
            return new Response(JSON.stringify(cachedStats), {
              headers: { 'Content-Type': 'application/json' }
            });
          }
          
          // Pas de cache valide, faire l'appel API
          const freshStats = await fetchStatsFromAPI();
          
          // Mettre en cache pour les prochaines requêtes
          await cacheStats(freshStats);
          
          return new Response(JSON.stringify(freshStats), {
            headers: { 'Content-Type': 'application/json' }
          });
          
        } catch (error) {
          console.error('[SW] Error handling stats request:', error);
          
          // En cas d'erreur, essayer de servir le cache même expiré
          const expiredCache = await getCachedStats();
          if (expiredCache) {
            console.log('[SW] Serving expired cache due to error');
            return new Response(JSON.stringify(expiredCache), {
              headers: { 'Content-Type': 'application/json' }
            });
          }
          
          // Sinon retourner une erreur
          return new Response(JSON.stringify({
            error: 'Stats unavailable',
            message: error.message
          }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      })()
    );
  }
});