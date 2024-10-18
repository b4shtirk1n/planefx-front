import { Account } from "../models/Account";

export interface AccountResponse {
  account: Account;
  countOrders: number;
}