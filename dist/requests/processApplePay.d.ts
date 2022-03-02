import type { WyreInstance } from "../types";
export declare type processApplePayArgs = {
    readonly wyre: WyreInstance;
    readonly partnerId: string;
    readonly ref: {
        readonly amount: string;
        readonly sourceCurrency: string;
        readonly destCurrency: string;
        readonly dest: string;
        readonly countryCode: string;
        readonly referenceId: string;
        readonly user: {
            readonly firstName: string;
            readonly lastName: string;
            readonly email: string;
            readonly street1: string;
            readonly city: string;
            readonly state: string;
            readonly country: string;
            readonly postalCode: string;
            readonly phone: string;
        };
        readonly quote: {
            readonly sourceAmount: string;
        };
        readonly reserve: {
            readonly reservation: string;
        };
    };
    readonly applePayToken: unknown;
};
export default function processApplePay({ wyre, partnerId, ref, applePayToken, }: processApplePayArgs): Promise<any>;
