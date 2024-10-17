import { CommandType } from "../enums/CommandType";

export class CommandRequest {
  account?: number;
  order?: number;
  volume?: number;
  ticker?: string;
  orderType?: string;
  type: CommandType = this.volume ? CommandType.Open : CommandType.Close;
}