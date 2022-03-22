import axios, { AxiosResponse, Method } from "axios";
import { WyreParams } from "../types";

export default async function wyre({
  baseUrl = "",
  url: endpoint,
  method = "get",
  data = undefined,
}: WyreParams): Promise<AxiosResponse> {
  if (typeof endpoint !== "string") {
    throw new Error(`Expected String url, encountered ${endpoint}.`);
  }
  const baseProps = method === "get" ? 
  {
    url: `${baseUrl}${endpoint}`,
     method: method as Method,
  } : 
  {
    url: `${baseUrl}${endpoint}`,
     method: method as Method,
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(baseProps);
}
