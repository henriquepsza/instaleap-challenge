interface QuantityFoundLimits {
  max: number;
  min: number;
}

// interface Replacement {
//   replacement_mode: string;
//   suggested_replacements: string[];
// }
//
// interface KitInfo {
//   id: string;
//   number: number;
//   price: number;
// }

interface ClaimInformation {
  max_time_to_claim_in_hours: number;
  available_claim_actions: string[];
}

interface Attributes {
  category: string;
  plu: string;
  ean: string;
  location: string;
  picking_index: string;
}

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
  available_lots: string[];
  claim_information: ClaimInformation;
  attributes: Attributes;
}

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

interface AvailabilityRequest {
  currency_code: string;
  start: string;
  end: string;
  slot_size: number;
  minimum_slot_size: number;
  operational_models_priority: string[];
  fallback: boolean;
  store_reference: string;
  origin: Location;
  destination: Location;
  job_items: JobItem[];
}

export default AvailabilityRequest;
