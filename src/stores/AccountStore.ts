import { create } from "zustand";
import { Account } from "../models/Account";
import { BaseStore } from "./BaseStore";
import { AxiosError } from "axios";
import { api } from "../api/Axios";
import { OrderResponse } from "../models/OrderResponse";
import { useUserStore } from "./UserStore";

type AccountStore = BaseStore & {
	accounts: Account[];

	fetchAccounts(): void;
};

export const useAccountStore = create<AccountStore>((set) => ({
	accounts: [],
	isLoading: false,

	async fetchAccounts() {
		const user = useUserStore.getState().user
		set({ isLoading: true });
		try {
			let response = await api.get(`Account/User/${user?.id}`);
			const accounts = response.data as Account[]

			accounts.forEach(async account => {
				response = await api.get(`Order/${account.id}`);
				const orders = response.data as OrderResponse
				account.openedOrders = orders.openedOrders
				account.closedOrders = orders.closedOrders
				console.log(orders.openedOrders)
			});
			set({ accounts });
		} catch (err) {
			set({ error: (err as AxiosError).toJSON() });
		} finally {
			set({ isLoading: false });
		}
	},
}));
