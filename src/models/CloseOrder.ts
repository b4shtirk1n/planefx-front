import { BaseOrder } from "./BaseOrder";

export interface CloseOrder extends BaseOrder {
  timeClosed: Date;
  priceClosed: number;
  isOpen: false;
}