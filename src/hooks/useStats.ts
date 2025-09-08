import { useState, useEffect } from 'react';
import { pb } from '../../pocketbase/pocketbase';

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
        
        // Tentative de récupération sans authentification d'abord
        const records = await pb.collection('stats_view').getFullList();
        console.log(records);
        if (records.length > 0) {
          const statsRecord = records[0];
          setStats({
            total_users_verified: statsRecord.total_users_verified || 0,
            total_themes: statsRecord.total_themes || 0,
            total_hours_content: statsRecord.total_hours_content || 0,
            total_published_resources: statsRecord.total_published_resources || 0,
            total_views: statsRecord.total_views || 0,
          });
        } else {
          setStats({
            total_users_verified: 0,
            total_themes: 0,
            total_hours_content: 0,
            total_published_resources: 0,
            total_views: 0,
          });
        }
      } catch (err) {
        console.warn('Erreur lors de la récupération des stats:', err);
        setError(err instanceof Error ? err.message : 'Impossible de charger les stats');
        // Ne pas définir de stats en cas d'erreur, garder null
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { stats, loading, error };
}