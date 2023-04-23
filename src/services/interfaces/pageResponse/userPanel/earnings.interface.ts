import { IMTransaction } from "../../model/transaction.interface";

export interface IUpEarningsPage {
  transactions: IMTransaction[];
  total_earnings: number;
}
