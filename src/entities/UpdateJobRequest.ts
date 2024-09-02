// Represents individual attributes within prices
interface PriceAttribute {
  type: string;
  name: string;
  value: number;
}

// Represents the pricing details, including subtotal, shipping fee, etc.
interface Prices {
  subtotal: number;
  shipping_fee: number;
  discounts: number;
  taxes: number;
  order_value: number;
  attributes: PriceAttribute[];
}

// Represents the payment details including status, method, and reference
interface Payment {
  payment_status: string;
  method: string;
  id: string;
  reference: string;
  value: number;
  payment_status_details: string;
  method_details: string;
  blocking_policy: string;
}

// Represents the invoice details, including reference and attachments
interface Invoice {
  reference: string;
  attachments: any[];
}

// Represents the complete interface combining prices, payment, and invoice details
interface UpdateJobRequest {
  prices: Prices;
  payment: Payment;
  invoice: Invoice;
}

export default UpdateJobRequest;
