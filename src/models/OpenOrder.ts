import { BaseOrder } from "./BaseOrder";

export interface OpenOrder extends BaseOrder {
  priceOpened: number;
  timeUpdate: Date;
}