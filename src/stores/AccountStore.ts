import { create } from "zustand";
import { Account } from "../models/Account";
import { BaseStore } from "./BaseStore";

type AccountStore = BaseStore & {
	accounts: Account[];

	fetchAccounts(): void;
};

export const useAccountStore = create<AccountStore>((set) => ({
	accounts: [],
	isLoading: false,

	async fetchAccounts() {
		set({ isLoading: true });
		set({
			accounts: [
				{ Id: 1, Name: "пуки", Number: 1, Count: 3, IsCent: false },
				{ Id: 2, Name: "каки", Number: 1, Count: 5, IsCent: false },
			],
		});
		// try {
		// 	const response = await api.get("User/GetByTg");
		// 	set({ subscribes: response.data as Subscribe[] });
		// } catch (err) {
		// 	set({ error: (err as AxiosError).toJSON() });
		// }
		set({ isLoading: false });
	},
}));
