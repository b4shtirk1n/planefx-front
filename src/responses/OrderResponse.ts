import { CloseOrder } from "./CloseOrder";
import { OpenOrder } from "./OpenOrder";

export interface OrderResponse {
  openedOrders: OpenOrder[];
  closedOrders: CloseOrder[];
}