import { create } from "zustand";
import { Subscribe } from "../models/Subscribe";
import { BaseStore } from "./BaseStore";
import { UserSubscribe } from "../models/UserSubscribe";
import { api } from "../api/Axios";
import { AxiosError } from "axios";
import { useUserStore } from "./UserStore";
import { InvoiceRequest } from "../requests/InvoiceRequest";
import { LabelPrice } from "../models/LabelPrice";
import WebApp from "@twa-dev/sdk";

type SubscribeStore = BaseStore & {
	subscribes: Subscribe[];
	userSubscribes: UserSubscribe[];

	fetchSubscribes(): void;
	addToCart(subscribe: number): void;
	removeToCart(subscribe: number): void;
	checkout(user: number): Promise<string>;
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

	async checkout(): Promise<string> {
		let res: string = "failed";
		const request = new InvoiceRequest("test", "test", "test", "XTR", [new LabelPrice("XTR", 10)]);

		try {
			WebApp.openInvoice(await api.post("Subscribe/Checkout", request), (status) => {
				const userSubscribes: UserSubscribe[] = [];

				if (status === "paid") {
					get().subscribes.forEach((item) => {
						for (let i = 0; i < item.count; i++) {
							userSubscribes.push({
								user: useUserStore.getState().user!.id,
								subscribe: item.id,
								date: new Date()
							});
						}
					});
					set({ userSubscribes });
				}
				res = status;
			})
		} catch (err) {
			set({ error: (err as AxiosError).toJSON() });
		}
		console.log(res)
		return res;
	},
}));
