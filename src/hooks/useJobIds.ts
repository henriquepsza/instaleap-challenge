import { useEffect, useState } from 'react';
import JSONServerClient from '../services/api-client-json-server.ts';

const jobIdClient = new JSONServerClient<null, { id: string }>('jobIds');

const useJobIds = () => {
  const [jobIds, setJobIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchJobIds = async () => {
      try {
        const data = await jobIdClient.getAll();
        setJobIds(data.map(job => job.id));
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobIds();
  }, []);

  return { jobIds, isLoading, error };
};

export default useJobIds;
