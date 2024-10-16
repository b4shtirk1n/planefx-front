import { create } from "zustand";
import { BaseStore } from "./BaseStore";
import { OrderResponse } from "../models/OrderResponse";
import { api } from "../api/Axios";
import { AxiosError } from "axios";
import { OrderType } from "../models/OrderType";

type OrderStore = BaseStore & {
  orders?: OrderResponse;
  types?: OrderType[];

  fetchOrders(account: number): void;
  fetchTypes(): void;
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
  },

  async fetchTypes() {
    set({ isLoading: true })
    try {
      const response = await api.get(`Order/GetTypes`);
      set({ types: response.data as OrderType[] });
    } catch (err) {
      set({ error: (err as AxiosError).toJSON() });
    } finally {
      set({ isLoading: false });
    }
  },
}))