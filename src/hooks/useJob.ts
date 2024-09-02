import APIClient from '../services/api-client.ts';
import { useQuery } from '@tanstack/react-query';
import JobResponse from '../entities/JobResponse.ts';
import JSONServerClient from '../services/api-client-json-server.ts';

const apiClient = new APIClient<null, JobResponse>('/jobs');
const jobIdClient = new JSONServerClient<null, { id: string }>('jobIds');

const useJob = () => {
  return useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const jobIdsResponse = await jobIdClient.getAll();
      const jobIds = jobIdsResponse.map(job => job.id);

      return await Promise.all(jobIds.map(id => apiClient.get(id)));
    },
  });
};

export default useJob;
