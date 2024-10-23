import { LabelPrice } from "../models/LabelPrice";

export class InvoiceRequest {
  title: string;
  description: string;
  payload: string;
  currency: string;
  prices: LabelPrice[];
  provider_token?: string;
  max_tip_amount?: number;
  suggested_tip_amounts?: number[];
  provider_data?: string;

  constructor(
    title: string,
    description: string,
    payload: string,
    currency: string,
    prices: LabelPrice[],
    providerToken?: string,
    maxTipAmount?: number,
    suggestedTipAmounts?: number[],
    providerData?: string
  ) {
    this.title = title;
    this.description = description;
    this.payload = payload;
    this.currency = currency;
    this.prices = prices;
    this.provider_token = providerToken;
    this.max_tip_amount = maxTipAmount;
    this.suggested_tip_amounts = suggestedTipAmounts;
    this.provider_data = providerData;
  }
}