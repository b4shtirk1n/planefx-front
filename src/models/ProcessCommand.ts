import { CommandRequest } from "../requests/CommandRequest";

export interface ProcessCommand {
  command: CommandRequest;
  ordersCount: number
}