import APIClient from '../services/api-client.ts';
import CreateJobRequest from '../entities/CreateJobRequest.ts';
import CreateJobResponse from '../entities/CreateJobResponse.ts';
import { useMutation } from '@tanstack/react-query';

const apiClient = new APIClient<CreateJobRequest, CreateJobResponse>('/jobs');

const useAddJob = () => {
  return useMutation<CreateJobResponse, Error, CreateJobRequest>({
    mutationFn: request => apiClient.post(request),
    onSuccess: response => {
      return response;
    },
    onError: error => {
      return error;
    },
  });
};

export default useAddJob;
