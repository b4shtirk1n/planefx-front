import { Account } from "./Account";

export interface AccountResponse {
  account: Account;
  countOrders: number;
}