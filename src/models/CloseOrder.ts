import { BaseOrder } from "./BaseOrder";

export interface CLoseOrder extends BaseOrder {
  timeClosed: Date;
  priceClosed: number;
}