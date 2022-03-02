/// <reference types="react" />
export declare type SendWyreProps = {
    children: JSX.Element | JSX.Element[];
    baseUrl: string;
    partnerId: string;
};
declare const SendWyre: {
    ({ partnerId, baseUrl, children, ...extras }: SendWyreProps): JSX.Element;
    displayName: string;
    defaultProps: {
        partnerId: null;
        baseUrl: string;
    };
};
export default SendWyre;
