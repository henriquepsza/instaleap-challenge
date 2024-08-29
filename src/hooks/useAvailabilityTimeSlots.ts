import APIClient from '../services/api-client.ts';
import AvailabilityRequest from '../entities/AvailabilityRequest.ts';
import AvailabilityResponse from '../entities/AvailabilityResponse.ts';
import { useMutation } from '@tanstack/react-query';

const apiClient = new APIClient<AvailabilityRequest, AvailabilityResponse>(
  '/jobs/availability/v2'
);

const useAvailabilityTimeSlots = () => {
  return useMutation<AvailabilityResponse, Error, AvailabilityRequest>({
    mutationFn: request => apiClient.post(request),
    onSuccess: response => {
      return response;
    },
    onError: error => {
      return error;
    },
  });
};

export default useAvailabilityTimeSlots;
