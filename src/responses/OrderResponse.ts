import { CloseOrder } from "../models/CloseOrder";
import { OpenOrder } from "../models/OpenOrder";
// import { PaginationOrder } from "./PaginationOrder";

export interface OrderResponse {
  openedOrders: OpenOrder[];
  closedOrders: CloseOrder[];
  // paginationOpenedOrders: PaginationOrder<OpenOrder[]>;
  // paginationClosedOrders: PaginationOrder<CloseOrder[]>;
}