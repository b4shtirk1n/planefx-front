import { create } from "zustand";
import { User } from "../models/User";
import { api } from "../api/Axios";
import { BaseStore } from "./BaseStore";
import { AxiosError } from "axios";
import { persist } from "zustand/middleware";
import WebApp from "@twa-dev/sdk";
import profileImg from "../assets/profile.svg";

type UserStore = BaseStore & {
  username?: string;
  tgId: number;
  photoUrl: string;
  user?: User;

  fetchUser(): void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set, get) => ({
      username: WebApp.initDataUnsafe.user?.username,
      tgId: WebApp.initDataUnsafe.user!.id,
      photoUrl: profileImg,
      isLoading: false,

      async fetchUser() {
        set({ isLoading: true });
        try {
          const response = await api.post("User", {
            Username: get().username,
            TgId: get().tgId,
            TimeZone: new Date().getTimezoneOffset() / -60,
          });

          await fetch(WebApp.initDataUnsafe.user!.photo_url!, {
            mode: "no-cors",
          }).then((resp) =>
            resp.blob().then((photo) => {
              set({ photoUrl: URL.createObjectURL(photo) });
            })
          );

          set({ user: response.data as User });
        } catch (err) {
          set({ error: (err as AxiosError).toJSON() });
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "user",
    }
  )
);
