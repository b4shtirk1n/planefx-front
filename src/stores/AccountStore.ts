import { create } from "zustand";
import { BaseStore } from "./BaseStore";
import { AxiosError } from "axios";
import { api } from "../api/Axios";
import { useUserStore } from "./UserStore";
import { AccountResponse } from "../models/AccountResponse";

type AccountStore = BaseStore & {
	accounts?: AccountResponse[];

	fetchAccounts(): void;
};

export const useAccountStore = create<AccountStore>((set) => ({
	isLoading: false,

	async fetchAccounts() {
		set({ isLoading: true });
		try {
			const response = await api.get(`Account/User/${useUserStore.getState().user?.id}`);
			set({ accounts: response.data as AccountResponse[] });
		} catch (err) {
			set({ error: (err as AxiosError).toJSON() });
		} finally {
			set({ isLoading: false });
		}
	},
}));
