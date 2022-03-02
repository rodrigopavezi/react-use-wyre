export declare type AuthorizeParams = {
    readonly sms?: string;
    readonly card2fa?: string;
};
export default function useDebitCard(): {
    pay: ({ amount, sourceCurrency, destCurrency, dest, user: { firstName, lastName, email, street1, city, state, country, postalCode, phone, }, reserve: { reservation }, debitCard, }: any) => Promise<Readonly<{
        walletOrderId: any;
        smsNeeded: any;
        card2faNeeded: any;
        authorize: ({ sms, card2fa }: AuthorizeParams) => Promise<any>;
    }>>;
};
