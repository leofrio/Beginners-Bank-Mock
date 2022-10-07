export interface Transaction {
  id?: string;
  value: number;
  destination: string | number;
  date?: Date;
}
