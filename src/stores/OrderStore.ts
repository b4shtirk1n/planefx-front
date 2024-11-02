import { create } from "zustand";
import { BaseStore } from "./BaseStore";
import { OrderResponse } from "../responses/OrderResponse";
import { api } from "../api/Axios";
import { AxiosError } from "axios";

type OrderStore = BaseStore & {
  orders?: OrderResponse;
  types: string[];

  fetchOrders(account: number): void;
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  isLoading: false,
  types: [
    "Buy market",
    'Buy limit',
    "Buy stop",
    "Sell market",
    "Sell limit",
    "Sell stop"
  ],

  async fetchOrders(account) {
    set({ isLoading: true });
    try {
      const response = await api.get(`Order/${account}`);
      set({ orders: response.data as OrderResponse });
    } catch (err) {
      set({ error: (err as AxiosError).toJSON() });
    } finally {
      set({ isLoading: false });
      console.log(get().orders)
    }
  },
}))