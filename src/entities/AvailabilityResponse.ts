interface Store {
  id: string;
  name: string;
}

export interface AvailabilityTimeSlot {
  id: string;
  from: string;
  to: string;
  operational_model: string;
  store: Store;
  description: string;
  expires_at: string;
}

type AvailabilityResponse = AvailabilityTimeSlot[];

export default AvailabilityResponse;
