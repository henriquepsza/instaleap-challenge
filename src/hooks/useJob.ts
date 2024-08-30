import APIClient from '../services/api-client.ts';
import { useQuery } from '@tanstack/react-query';
import JobResponse from '../entities/JobResponse.ts';

const apiCliente = new APIClient<null, JobResponse>('/jobs');

const useJob = (id: string) => {
  return useQuery({
    queryKey: ['job', id],
    queryFn: () => apiCliente.get(id),
  });
};

export default useJob;
