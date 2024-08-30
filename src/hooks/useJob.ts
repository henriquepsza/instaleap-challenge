import APIClient from '../services/api-client.ts';
import { useQuery } from '@tanstack/react-query';

const apiCliente = new APIClient('/jobs');

const useJob = (id: string) => {
  return useQuery({
    queryKey: ['job', id],
    queryFn: () => apiCliente.get(id),
  });
};

export default useJob;
