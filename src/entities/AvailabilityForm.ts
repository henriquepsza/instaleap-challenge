// Interface para limites de quantidade encontrados
interface QuantityFoundLimits {
  max: number;
  min: number;
}

// Interface para substituição de itens
interface Replacement {
  replacement_mode: string;
  suggested_replacements: string[];
}

// Interface para informações do kit
interface KitInfo {
  id: string;
  number: number;
  price: number;
}

// Interface para informações de reclamação
interface ClaimInformation {
  max_time_to_claim_in_hours: number;
  available_claim_actions: string[];
}

// Interface para atributos de um item
interface Attributes {
  category: string;
  plu: string;
  ean: string;
  location: string;
  picking_index: string;
}

// Interface para os itens do trabalho
interface JobItem {
  id: string;
  name: string;
  photo_url: string;
  unit: string;
  sub_unit: string;
  quantity: number;
  sub_quantity: number;
  quantity_found_limits: QuantityFoundLimits;
  barcodes: string[];
  weight: number;
  volume: number;
  price: number;
  comment: string;
  picking_time_multiplier: number;
  replacement: Replacement;
  available_lots: string[];
  kit_info: KitInfo;
  claim_information: ClaimInformation;
  attributes: Attributes;
}

// Interface para localização (origem e destino)
interface Location {
  name: string;
  address: string;
  address_two: string;
  description: string;
  country: string;
  city: string;
  state: string;
  zip_code: string;
  latitude: number;
  longitude: number;
}

// Interface principal para o trabalho
interface AvailabilityForm {
  currency_code: string;
  start: string;
  end: string;
  slot_size: number;
  minimum_slot_size: number;
  operational_models_priority: string[];
  fallback: boolean;
  origin: Location;
  destination: Location;
  job_items: JobItem[];
}

export default AvailabilityForm;
