import { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import { UtilityProviderObject, UtilityProviderQuery } from "./types";

export default UtilityProvider as APICall<UtilityProviderQuery, UtilityProviderObject>;

async function UtilityProvider(settings: APIFetchSettings, query: UtilityProviderQuery) {
  const url_path = `/api/obligation/utility-providers`;
  const base_url = getBaseURL(settings);
  const search = toQueryString(query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
