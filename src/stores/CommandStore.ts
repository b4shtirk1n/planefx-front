import { create } from "zustand";
import { api } from "../api/Axios";
import { AxiosError } from "axios";
import { CommandRequest } from "../models/CommandRequest";
import { BaseStore } from "./BaseStore";

type CommandStore = BaseStore & {
  CreateCommand(command: CommandRequest, account: number): void;
}

export const useCommandStore = create<CommandStore>((set) => ({
  isLoading: false,

  async CreateCommand(command, account) {
    command.account = account;
    console.log(command);

    set({ isLoading: true });
    try {
      await api.post(`Command`, command);
    } catch (err) {
      set({ error: (err as AxiosError).toJSON() });
    } finally {
      set({ isLoading: false });
    }
  }
}))