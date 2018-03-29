export class Statement {
  statement_id: number;
  user_id: number;
  product_name: string;
  weight: number;
  storage_conditions: string;
  count: number;
  status: string;
  delivery_status: string;
  recipient: any;
  recipient_first_name: string;
  recipient_last_name: string;
  recipient_phone: number;
  shipping_city: string;
  shipping_address: string;
  delivery_city: string;
  delivery_address: string;
}
