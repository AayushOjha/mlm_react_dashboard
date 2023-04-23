import { IMWithdrawal } from "../../model/withdrawal.interface";

export interface IUpWithdrawalsPage {
  withdrawals: IMWithdrawal[];
  total_money_withdrew: number;
}
