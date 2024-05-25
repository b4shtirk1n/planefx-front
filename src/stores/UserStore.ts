import { create } from "zustand";
import WebApp from "@twa-dev/sdk";

type UserStore = {
	username?: string;
	tgId?: number;
	photoUrl?: string;
	token?: string;

	onCopyToken(): Promise<void>;
};

export const useUserStore = create<UserStore>()(
	() => (
		console.log(WebApp.initDataUnsafe.user?.photo_url),
		console.log(Telegram.WebApp.initDataUnsafe.user?.photo_url),
		{
			username: WebApp.initDataUnsafe.user?.username,
			tgId: WebApp.initDataUnsafe.user?.id,
			photoUrl: Telegram.WebApp.initDataUnsafe.user?.photo_url,
			token: "",

			async onCopyToken() {
				await navigator.clipboard.writeText(this.token!);
			},
		}
	)
);
