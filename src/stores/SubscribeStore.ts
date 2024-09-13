import { create } from "zustand";
import { Subscribe } from "../models/Subscribe";
import { BaseStore } from "./BaseStore";
import { UserSubscribe } from "../models/UserSubscribe";
import { api } from "../api/Axios";
import { AxiosError } from "axios";

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
			const response = await api.get("Subscribe");
			set({
				subscribes: (response.data as Subscribe[]).map(item => {
					item.count = 0;
					return item
				}),
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
			subscribes: get().subscribes.map((item) =>
				item.id === subscribe ? { ...item, count: ++item.count } : item
			)
		});
	},

	removeToCart(subscribe) {
		set({
			subscribes: get().subscribes.map((item) =>
				item.id === subscribe ? { ...item, count: item.count - 1 > 0 ? --item.count : 0 } : item
			)
		});
	},

	async checkout(user) {
		// const response = await api.post("Subscribe/Checkout");
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
