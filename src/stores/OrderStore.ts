import { create } from "zustand";
import { BaseStore } from "./BaseStore";
import { CLoseOrder } from "../models/CloseOrder";
import { OpenOrder } from "../models/OpenOrder";
import { OrderResponse } from "../models/OrderResponse";
import { api } from "../api/Axios";
import { AxiosError } from "axios";

type OrderStore = BaseStore & {
  opened: OpenOrder[];
  closed: CLoseOrder[];

  fetchOrders(account: number): void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  opened: [],
  closed: [],
  isLoading: false,

  async fetchOrders(account) {
    set({ isLoading: true });
    try {
      const response = await api.get(`Order/${account}`);
      const orders = response.data as OrderResponse;
      set({
        opened: orders.openedOrders,
        closed: orders.closedOrders
      });
    } catch (err) {
      set({ error: (err as AxiosError).toJSON() });
    } finally {
      set({ isLoading: false });
    }
  }
}))