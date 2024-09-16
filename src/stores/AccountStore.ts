import { create } from "zustand";
import { BaseStore } from "./BaseStore";
import { AxiosError } from "axios";
import { api } from "../api/Axios";
import { OrderResponse } from "../models/OrderResponse";
import { useUserStore } from "./UserStore";
import { AccountResponse } from "../models/AccountResponse";

type AccountStore = BaseStore & {
	accounts: AccountResponse[];

	fetchAccounts(): void;
};

export const useAccountStore = create<AccountStore>((set) => ({
	accounts: [],
	isLoading: false,

	async fetchAccounts() {
		set({ isLoading: true });
		try {
			let response = await api.get(`Account/User/${useUserStore.getState().user?.id}`);
			let accounts = response.data as AccountResponse[]

			accounts = await Promise.all(accounts.map(async account => {
				response = await api.get(`Order/${account.account.id}`);
				const orders = response.data as OrderResponse;
				account.account.openedOrders = orders.openedOrders;
				account.account.closedOrders = orders.closedOrders;
				return account
			}));
			set({ accounts });
		} catch (err) {
			set({ error: (err as AxiosError).toJSON() });
		} finally {
			set({ isLoading: false });
		}
	},
}));
