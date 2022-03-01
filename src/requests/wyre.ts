import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {WyreParams} from '../types';

export default async function wyre({
  baseUrl = "",
  url: endpoint,
  method = "get",
  data = undefined,
}: WyreParams): Promise<AxiosResponse> {
  if (typeof endpoint !== "string") {
    throw new Error(`Expected String url, encountered ${endpoint}.`);
  }

  const url = `${endpoint}${
    endpoint.includes("?") ? "&" : "?"
  }timestamp=${new Date().getTime()}000`;

  const baseProps = {
    url: `${baseUrl}${url}`,
    method,
    data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(baseProps) as AxiosRequestConfig;
}
