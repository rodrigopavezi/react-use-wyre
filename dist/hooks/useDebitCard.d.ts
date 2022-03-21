export declare type AuthorizeParams = {
    readonly sms?: string;
    readonly card2fa?: string;
};
export default function useDebitCard(): {
    pay: ({ trigger3ds, ipAddress, amount, sourceCurrency, destCurrency, dest, user: { firstName, lastName, email, street1, city, state, country, postalCode, phone, }, reserve: { reservation }, debitCard, referenceId, }: any) => Promise<Readonly<{
        walletOrderId: any;
        smsNeeded: any;
        card2faNeeded: any;
        authorization3dsUrl: any;
        authorize: ({ sms, card2fa }: AuthorizeParams) => Promise<any>;
    }>>;
};
