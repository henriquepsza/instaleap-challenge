import APIClient from '../services/api-client.ts';
import { useMutation } from '@tanstack/react-query';

const apiClient = new APIClient('/jobs');

const useUpdateJob = () => {
  return useMutation({
    mutationFn: ({ id, request }: { id: string; request: any }) =>
      apiClient.put(request, undefined, `/jobs/${id}/payment_info`),
    onSuccess: response => {
      return response;
    },
    onError: error => {
      return error;
    },
  });
};

export default useUpdateJob;
