import * as React from "react";

import { SendWyreContext } from "../contexts";
import { wyre as makeRequest } from "../requests";

const { useCallback } = React;

export type SendWyreProps = {
  children: JSX.Element | JSX.Element[];
  baseUrl: string;
  partnerId: string;
};

const SendWyre = function ({
  partnerId,
  baseUrl,
  children,
  ...extras
}: SendWyreProps): JSX.Element {
  if (typeof partnerId !== "string") {
    throw new Error(
      `SendWyre: Expected String partnerId, encountered ${partnerId}.`
    );
  }

  const wyre = useCallback(
    ({ url, method, data }, overrides = {}) => {
      if (!overrides || typeof overrides !== "object") {
        throw new Error(
          `Expected object overrides, encountered ${overrides} (${typeof overrides}).`
        );
      }
      return makeRequest({
        baseUrl,
        url,
        method,
        data,
        // XXX: The caller can define override properties for the request signature.
        //      e.g. you could perform a different kind of authenticationType.
        ...overrides,
      });
    },
    [baseUrl]
  );

  return (
    <SendWyreContext.Provider {...extras} value={{ wyre, partnerId }}>
      {children}
    </SendWyreContext.Provider>
  );
};

SendWyre.displayName = "SendWyre";

SendWyre.defaultProps = {
  partnerId: null,
  baseUrl: "",
};

export default SendWyre;
