import * as React from "react";
export const defaultContext = Object.freeze({
    wyre: () => Promise.reject(new Error(`SendWyre: You must declare a SendWyre <Provider /> at the root of your application.`)),
    partnerId: null,
});
const SendWyreContext = React.createContext(defaultContext);
export default SendWyreContext;
