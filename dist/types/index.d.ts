import { AxiosResponse } from "axios";
export declare type WyreParams = {
    readonly baseUrl?: string;
    readonly url: string;
    readonly method: string;
    readonly data?: object | undefined;
};
export declare enum OrderStatus {
    RUNNING_CHECKS = 0,
    PROCESSING = 1,
    FAILED = 2,
    COMPLETE = 3
}
export declare type AnyObject = {
    readonly [key: string]: unknown;
};
export declare type WyreRequest = {
    readonly url: string;
    readonly method: string;
    readonly data?: AnyObject;
    readonly headers?: AnyObject;
};
export declare type WyreInstance = (config: WyreRequest, overrides?: AnyObject) => Promise<AxiosResponse>;
export declare type SendWyreContextValue = {
    readonly wyre: WyreInstance;
    readonly partnerId: string | null;
};
