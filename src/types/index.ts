import { AxiosResponse } from "axios";

export type WyreParams = {
  readonly baseUrl?: string;
  readonly url: string;
  readonly method: string;
  readonly data?: object | undefined;
};

export enum OrderStatus {
  RUNNING_CHECKS,
  PROCESSING,
  FAILED,
  COMPLETE,
}

export type AnyObject = {
  readonly [key: string]: unknown;
};

export type WyreRequest = {
  readonly url: string;
  readonly method: string;
  readonly data?: AnyObject;
  readonly headers?: AnyObject;
};

export type WyreInstance = (
  config: WyreRequest,
  overrides?: AnyObject
) => Promise<AxiosResponse>;

export type SendWyreContextValue = {
  readonly wyre: WyreInstance;
  readonly partnerId: string | null;
};
