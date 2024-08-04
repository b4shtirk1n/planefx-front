import { create } from "zustand";
import { Subscribe } from "../models/Subscribe";
import { BaseStore } from "./BaseStore";
import { UserSubscribe } from "../models/UserSubscribe";
// import { api } from "../api/Axios";
// import { AxiosError } from "axios";

type SubscribeStore = BaseStore & {
	subscribes: Subscribe[];
	userSubscribes: UserSubscribe[];

	fetchSubscribes(): void;
	addToCart(subscribe: number): void;
	removeToCart(subscribe: number): void;
	checkout(user: number): void;
};

export const useSubscribeStore = create<SubscribeStore>((set, get) => ({
	subscribes: [],
	userSubscribes: [],
	isLoading: false,

	async fetchSubscribes() {
		set({ isLoading: true });
		set({
			subscribes: [
				{ Id: 1, AccountsCount: 3, Count: 0, Price: 150 },
				{ Id: 2, AccountsCount: 5, Count: 0, Price: 300 },
			],
			userSubscribes: [],
		});
		// try {
		// 	const response = await api.get("User/GetByTg");
		// 	set({ subscribes: response.data as Subscribe[] });
		// } catch (err) {
		// 	set({ error: (err as AxiosError).toJSON() });
		// }
		set({ isLoading: false });
	},

	addToCart(subscribe) {
		const subscribes = get().subscribes.map((i) =>
			i.Id === subscribe ? { ...i, Count: ++i.Count } : i
		);
		set({ subscribes });
	},

	removeToCart(subscribe) {
		const subscribes = get().subscribes.map((i) =>
			i.Id === subscribe ? { ...i, Count: i.Count - 1 > 0 ? --i.Count : 0 } : i
		);
		set({ subscribes });
	},

	checkout(user) {
		const date = new Date();
		const userSubscribes: UserSubscribe[] = [];
		get().subscribes.forEach((item) => {
			for (let i = 0; i < item.Count; i++) {
				userSubscribes.push({
					User: user,
					Subscribe: item.Id,
					Date: date,
				});
			}
		});
		set({ userSubscribes });
	},
}));
