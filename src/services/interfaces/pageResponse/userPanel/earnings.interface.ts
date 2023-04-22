import { IMTransaction } from "../../model/tranction.interface";

export interface IUpEarningsPage {
  transactions: IMTransaction[];
  total_earnings: number;
}
