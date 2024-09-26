import { CloseOrder } from "./CloseOrder";
import { OpenOrder } from "./OpenOrder";

export class OrderResponse {
  openedOrders!: OpenOrder[];
  closedOrders!: CloseOrder[];
}