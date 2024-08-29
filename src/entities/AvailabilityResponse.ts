interface Store {
  id: string;
  name: string;
}

interface AvailabilityResponse {
  id: string;
  from: string; // Data e hora de início
  to: string; // Data e hora de término
  operational_model: string;
  store: Store;
  description: string;
  expires_at: string; // Data e hora de expiração
}

export default AvailabilityResponse;
