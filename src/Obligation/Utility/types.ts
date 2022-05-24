export type UtilityCreateBody = {
  address1: string;
  address2: string;
  state: string;
  city: string;
  zip: string;
  utility_provider_url: string;
};

export type UtilityType = "wireless" | "electric" | "gas" | "water";
export type UtilityStatus = "pending" | "current";

export type UtilityAddress = {
  address1: string;
  address2?: string | null;
  state: string;
  city: string;
  zip: string;
};

export type UtilityMatch = { id: number; url: string; amount: number; date: string };
export type UtilityMatchSummary = { count: string; newest?: UtilityMatch; oldest?: UtilityMatch };

type TransactionFinderStatus = "new" | "matched" | "searching" | "missing" | "multiple" | "closed";
export type TransactionFinder = {
  id: number;
  url: string;
  payment_account_url?: string;
  display_name: string;
  status: TransactionFinderStatus;
  amount_min: number;
  amount_max: number;
  window_open: number;
  window_close: number;
};

export type Utility = {
  id: number;
  url: string;
  type: UtilityType;
  name: string;
  status: UtilityStatus;
  obligation_start_date?: string;
  address?: UtilityAddress | null;
  match_summary: UtilityMatchSummary;
  reporting_start_at?: string;
  account_closed?: string;
  transaction_finders?: Array<TransactionFinder>;
  verification_version: number | string;
  utility_provider_url: string;
};
