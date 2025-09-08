import { useState, useEffect } from 'react';

interface Stats {
  total_users_verified: number;
  total_themes: number;
  total_hours_content: number;
  total_published_resources: number;
  total_views: number;
}

export function useStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true);
        setError(null);
        
        // Appel vers /api/stats qui sera intercepté par le Service Worker
        const response = await fetch('/api/stats');
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.message || 'Erreur lors du chargement des stats');
        }
        
        setStats({
          total_users_verified: data.total_users_verified || 0,
          total_themes: data.total_themes || 0,
          total_hours_content: data.total_hours_content || 0,
          total_published_resources: data.total_published_resources || 0,
          total_views: data.total_views || 0,
        });
        
      } catch (err) {
        console.warn('Erreur lors de la récupération des stats:', err);
        setError(err instanceof Error ? err.message : 'Impossible de charger les stats');
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { stats, loading, error };
}