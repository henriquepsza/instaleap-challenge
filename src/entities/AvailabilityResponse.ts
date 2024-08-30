// Interface para a loja (store)
interface Store {
  id: string;
  name: string;
}

// Interface principal para a lista de itens
interface AvailabilityTimeSlot {
  id: string;
  from: string; // Data e hora de início
  to: string; // Data e hora de término
  operational_model: string;
  store: Store;
  description: string;
  expires_at: string; // Data e hora de expiração
}

// Interface para a lista de FallbackItems
type AvailabilityResponse = AvailabilityTimeSlot[];

export type { AvailabilityResponse };
