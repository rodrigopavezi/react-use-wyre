import * as React from "react";
import { SendWyreContext } from "../contexts";
import { wyre as makeRequest } from "../requests";
const { useCallback } = React;
const SendWyre = function ({ partnerId, baseUrl, children, ...extras }) {
    if (typeof partnerId !== "string") {
        throw new Error(`SendWyre: Expected String partnerId, encountered ${partnerId}.`);
    }
    const wyre = useCallback(({ url, method, data }, overrides = {}) => {
        if (!overrides || typeof overrides !== "object") {
            throw new Error(`Expected object overrides, encountered ${overrides} (${typeof overrides}).`);
        }
        return makeRequest({
            baseUrl,
            url,
            method,
            data,
            ...overrides,
        });
    }, [baseUrl]);
    return (React.createElement(SendWyreContext.Provider, { ...extras, value: { wyre, partnerId } }, children));
};
SendWyre.displayName = "SendWyre";
SendWyre.defaultProps = {
    partnerId: null,
    baseUrl: "",
};
export default SendWyre;
