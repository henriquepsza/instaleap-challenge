// Represents individual attributes within prices
interface PriceAttribute {
  type: string;
  name: string;
  value: number;
}

// Represents the pricing details, including subtotal, shipping fee, etc.
interface Prices {
  subtotal: number;
  shippingFee: number;
  discounts: number;
  taxes: number;
  orderValue: number;
  attributes: PriceAttribute[];
}

// Represents the payment details including status, method, and reference
interface Payment {
  id: string;
  method: string;
  methodDetails: string;
  reference: string;
  paymentStatus: string;
  paymentStatusDetails: string;
  value: number;
  blockingPolicy: string;
  metadata: any | null; // Metadata can be of any type or null
}

// Represents the invoice details, including reference and attachments
interface Invoice {
  reference: string;
  attachments: any[];
}

// Represents the complete payment information including prices and invoice
interface UpdateJobResponse {
  payment: Payment;
  prices: Prices;
  invoice: Invoice;
  currencyCode: string;
}

// Main interface that combines all the details
export default UpdateJobResponse;
