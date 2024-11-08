import { create } from "zustand";
import { api } from "../api/Axios";
import { AxiosError } from "axios";
import { CommandRequest } from "../requests/CommandRequest";
import { BaseStore } from "./BaseStore";
import { ProcessCommand } from "../models/ProcessCommand";

type CommandStore = BaseStore & {
  processed?: ProcessCommand;

  CreateCommand(command: CommandRequest, ordersCount: number): void;
}

export const useCommandStore = create<CommandStore>((set) => ({
  isLoading: false,

  async CreateCommand(command, ordersCount) {
    set({ isLoading: true });

    if (this.processed !== undefined)
      if (this.processed?.command.includes(command))
        return

    try {
      await api.post(`Command`, command);
    } catch (err) {
      set({ error: (err as AxiosError).toJSON() });
    } finally {
      set({
        processed: {
          command: [{ ...command }],
          ordersCount
        }, isLoading: false
      });
    }
  }
}))