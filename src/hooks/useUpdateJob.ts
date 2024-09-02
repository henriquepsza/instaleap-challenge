import APIClient from '../services/api-client.ts';
import { useMutation } from '@tanstack/react-query';

const apiClient = new APIClient('/jobs/{jobId}/payment_info');

const useUpdateJob = (id: string) => {
  return useMutation({
    mutationFn: request => apiClient.put(id, request),
    onSuccess: response => {
      return response;
    },
    onError: error => {
      return error;
    },
  });
};

export default useUpdateJob;
