// Represents the recipient's details
interface Recipient {
  name: string;
  email: string;
  phone_number: string;
}

// Represents the payment method information
interface Payment {
  method: string;
}

// Represents the payment information including currency and prices
interface PaymentInfo {
  currency_code: string;
  prices: {
    order_value: number;
  };
  payment: Payment;
}

// Represents the contactless delivery instructions
interface ContactLess {
  comment: string;
  cash_receiver: string;
  phone_number: string;
}

// Main interface combining all the relevant details for the delivery slot
interface CreateJobRequest {
  slot_id: string;
  client_reference: string;
  recipient: Recipient;
  payment_info: PaymentInfo;
  add_delivery_code: boolean;
  contact_less: ContactLess;
}

export default CreateJobRequest;
