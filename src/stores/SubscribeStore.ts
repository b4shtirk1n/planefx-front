import { create } from "zustand";
import { Subscribe } from "../models/Subscribe";
import { BaseStore } from "./BaseStore";
// import { api } from "../api/Axios";
// import { AxiosError } from "axios";

type SubscribeStore = BaseStore & {
	subscribes: Subscribe[];

	fetchSubscribes(): void;
	addToCart(id: number): void;
	removeToCart(id: number): void;
};

export const useSubscribeStore = create<SubscribeStore>((set, get) => ({
	subscribes: [],
	isLoading: false,

	async fetchSubscribes() {
		set({ isLoading: true });
		set({
			subscribes: [
				{ Id: 1, AccountsCount: 3, Count: 0, Price: 150 },
				{ Id: 2, AccountsCount: 5, Count: 0, Price: 300 },
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

	addToCart(id) {
		const subscribes = get().subscribes!.map((i) =>
			i.Id === id ? { ...i, count: i.Count++ } : i
		);
		set({ subscribes });
	},

	removeToCart(id) {
		const subscribes = get().subscribes!.map((i) =>
			i.Id === id ? { ...i, count: i.Count - 1 > 0 ? i.Count-- : 0 } : i
		);
		set({ subscribes });
	},
}));
