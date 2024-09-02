import APIClient from '../services/api-client.ts';
import { useMutation } from '@tanstack/react-query';
import UpdateJobRequest from '../entities/UpdateJobRequest.ts';
import UpdateJobResponse from '../entities/UpdateJobResponse.ts';

const apiClient = new APIClient<UpdateJobRequest, UpdateJobResponse>('/jobs');

const useUpdateJob = () => {
  return useMutation<
    UpdateJobResponse,
    Error,
    { id: string; request: UpdateJobRequest }
  >({
    mutationFn: ({ id, request }: { id: string; request: UpdateJobRequest }) =>
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
