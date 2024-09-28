import { BaseOrder } from "./BaseOrder";

export interface OpenOrder extends BaseOrder {
  timeUpdate: Date;
}