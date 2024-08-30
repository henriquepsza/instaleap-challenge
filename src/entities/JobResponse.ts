// Represents the coordinates (latitude and longitude) of a location
interface Coordinates {
  lat: number;
  lng: number;
}

// Represents the address information of a location
interface Address {
  name: string;
  address: string;
  address_two: string;
  country: string;
  state: string;
  city: string;
  zip_code: string;
  description: string;
  coordinates: Coordinates;
}

// Represents the price details of a product or service
interface Price {
  amount: number;
  currency_code: string;
}

// Represents the presentation details of an item (e.g., packaging, weight, etc.)
interface Presentation {
  quantity: number;
  unit: string;
  sub_unit: string;
  sub_quantity: number;
  name: string;
  price: Price;
  weight: number;
  volume: number;
  dimensions: any[];
}

// Represents the attributes of an item (e.g., category, EAN code, etc.)
interface Attributes {
  ean: string;
  category: string;
}

// Represents the details of an item in the job
interface Item {
  id: string;
  state: string;
  name: string;
  package_id: string | null;
  quantity: number;
  found_quantity: number;
  photo_url: string;
  presentation: Presentation;
  attributes: Attributes;
  origin: string;
  comment: string;
  is_substitute: boolean;
  replaced_by: string | null;
  reference: string;
  picking_info: string | null;
  claim_information: string | null;
  rejection_information: string | null;
  rejected_quantity: {
    rejected_by_driver: number;
    rejected_by_user: number;
  };
}

// Represents the payment information including method and payment details
interface Payment {
  method: string;
  payment: {
    amount: number;
    currency: string;
  };
}

// Represents the recipient's details
interface Recipient {
  name: string;
  email: string;
  phone_number: string;
}

// Represents a step in a task
interface Step {
  id: string;
  state: string;
  type: string;
  optimal_start_time: string;
  optimal_end_time: string;
  actual_start_time: string | null;
  actual_end_time: string | null;
}

// Represents a task associated with the job
interface Task {
  id: string;
  type: string;
  state: string;
  optimal_start_time: string;
  optimal_end_time: string;
  resource: string | null;
  payment: string | null;
  steps: Step[];
}

// Represents the delivery options for the job
interface DeliveryOption {
  method: string;
  comment?: string;
  photo_url?: string | null;
  phone_number?: string;
  cash_receiver?: string;
  photo_taken_at?: string | null;
  delivery_code?: string;
  delivery_code_tries?: number;
}

// Represents the main job interface combining all details
interface JobResponse {
  id: string;
  job_number: string;
  client_id: string;
  start_time: string;
  end_time: string;
  created_at: string;
  state: string;
  operational_model: string;
  origin: Address;
  destination: Address;
  total_items: number;
  items_replaced: number;
  products_cost: {
    amount: number;
    currency: string;
  };
  items: Item[];
  collect_with: Payment;
  recipient: Recipient;
  tasks: Task[];
  can_process_checkout: boolean;
  can_process_exit_store: boolean;
  automatic_checkout: boolean;
  delivery_options: DeliveryOption[];
  job_comment: string | null;
  external_data: any | null;
  payment_info: {
    currency_code: string;
    prices: {
      order_value: number;
      shipping_fee: number | null;
      taxes: number;
      discounts: number;
      subtotal: number;
      attributes: any[];
      additional_info: any[];
    };
    payment: {
      id: string | null;
      method: string;
      method_details: string | null;
      reference: string | null;
      payment_status: string | null;
      payment_status_details: string | null;
      value: number;
      blocking_policy: string | null;
      metadata: any | null;
    };
    invoice: string | null;
  };
  store: {
    id: string;
    name: string;
    reference: string;
  };
  is_big_order: boolean;
}

export default JobResponse;
