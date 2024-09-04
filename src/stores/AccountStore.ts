import { create } from "zustand";
import { Account } from "../models/Account";
import { BaseStore } from "./BaseStore";
import { AxiosError } from "axios";
import { api } from "../api/Axios";
import { useUserStore } from "./UserStore";
import { OrderResponse } from "../models/OrderResponse";
import { User } from "../models/User";

type AccountStore = BaseStore & {
	accounts: Account[];
	user?: User;

	fetchAccounts(): void;
};

export const useAccountStore = create<AccountStore>((set, get) => ({
	accounts: [],
	isLoading: false,
	user: useUserStore.getState().user,

	async fetchAccounts() {
		console.log(get().user)
		set({ isLoading: true });
		try {
			let response = await api.get(`Account/User/${get().user?.id}`);
			const accounts = response.data as Account[]
			console.log(accounts)

			accounts.forEach(async account => {
				response = await api.get(`Order/${account.id}`);
				account.orders = response.data as OrderResponse
			});
			set({ accounts });
		} catch (err) {
			console.log(err)
			set({ error: (err as AxiosError).toJSON() });
		} finally {
			set({ isLoading: false });
		}
	},
}));
