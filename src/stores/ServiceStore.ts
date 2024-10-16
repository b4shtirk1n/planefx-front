import { api } from "../api/Axios";
import { create } from "zustand";
import { BaseStore } from "./BaseStore";
import { AxiosError } from "axios";

type ServiceStore = BaseStore & {
  tickers?: string[];
  fetchTickers(): void;
}

export const useServiceStore = create<ServiceStore>((set) => ({
  isLoading: false,

  async fetchTickers() {
    set({ isLoading: true })
    try {
      const response = await api.get(`Service/GetTickers`);
      set({ tickers: JSON.parse(response.data) });
    } catch (err) {
      set({ error: (err as AxiosError).toJSON() });
    } finally {
      set({ isLoading: false });
    }
  },
})) 