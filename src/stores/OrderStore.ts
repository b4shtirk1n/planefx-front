import { create } from "zustand";
import { BaseStore } from "./BaseStore";
import { OrderResponse } from "../models/OrderResponse";
import { api } from "../api/Axios";
import { AxiosError } from "axios";

type OrderStore = BaseStore & {
  orders?: OrderResponse;

  fetchOrders(account: number): void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  isLoading: false,

  async fetchOrders(account) {
    set({ isLoading: true });
    try {
      const response = await api.get(`Order/${account}`);
      set({ orders: response.data as OrderResponse });
    } catch (err) {
      set({ error: (err as AxiosError).toJSON() });
    } finally {
      set({ isLoading: false });
    }
  }
}))