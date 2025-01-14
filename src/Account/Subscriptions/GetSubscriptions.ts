import type { APICall, APIFetchSettings } from "../../types";
import type { Subscription, SubscriptionQuery } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default GetSubscriptions as APICall<SubscriptionQuery | void, Array<Subscription>>;

async function GetSubscriptions(settings: APIFetchSettings, query: SubscriptionQuery | void) {
  const url_path = `/api/account/subscriptions`;
  const base_url = getBaseURL(settings);
  const search = toQueryString(query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "GET" });

  return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
