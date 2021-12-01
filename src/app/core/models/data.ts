export interface Data {
  id?: number | string;
  name?: string;
  measurement?: {
    name: string;
    code: string;
  };
  amount?: number;
  price?: number;
  perishable?: boolean;
  expirationDate?: string;
  manufacturingDate?: string;
}
