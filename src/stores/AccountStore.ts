import { create } from "zustand";
import { Account } from "../models/Account";
import { BaseStore } from "./BaseStore";
import { AxiosError } from "axios";
import { api } from "../api/Axios";
import { OrderResponse } from "../models/OrderResponse";
import { User } from "../models/User";

type AccountStore = BaseStore & {
	accounts: Account[];

	fetchAccounts(): void;
};

export const useAccountStore = create<AccountStore>((set) => ({
	accounts: [],
	isLoading: false,

	async fetchAccounts() {
		const user = localStorage.getItem("user") as unknown as User
		console.log(user)
		set({ isLoading: true });
		try {
			let response = await api.get(`Account/User/${user?.id}`);
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
