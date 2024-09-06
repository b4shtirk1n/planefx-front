import { create } from "zustand";
import { Subscribe } from "../models/Subscribe";
import { BaseStore } from "./BaseStore";
import { UserSubscribe } from "../models/UserSubscribe";
import { api } from "../api/Axios";
import { AxiosError } from "axios";
import { useUserStore } from "./UserStore";

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
		try {
			const response = await api.get(`Subscribe/${useUserStore.getState().user?.id}`);
			set({
				subscribes: response.data as Subscribe[],
				userSubscribes: []
			});
		} catch (err) {
			set({ error: (err as AxiosError).toJSON() });
		} finally {
			set({ isLoading: false });
		}
	},

	addToCart(subscribe) {
		set({
			subscribes: get().subscribes.map((i) =>
				i.id === subscribe ? { ...i, Count: ++i.count } : i
			)
		});
	},

	removeToCart(subscribe) {
		set({
			subscribes: get().subscribes.map((i) =>
				i.id === subscribe ? { ...i, Count: i.count - 1 > 0 ? --i.count : 0 } : i
			)
		});
	},

	checkout(user) {
		const date = new Date();
		const userSubscribes: UserSubscribe[] = [];
		get().subscribes.forEach((item) => {
			for (let i = 0; i < item.count; i++) {
				userSubscribes.push({
					User: user,
					Subscribe: item.id,
					Date: date,
				});
			}
		});
		set({ userSubscribes });
	},
}));
