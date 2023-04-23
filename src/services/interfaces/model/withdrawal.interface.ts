export interface IMWithdrawal {
  _id: string;
  user: string;
  amount: number;
  status: string;
  transaction?: string;
  createdAt: string;
  updatedAt: string;
}
