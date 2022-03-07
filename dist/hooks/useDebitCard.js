import { useCallback } from "react";
import useWyre from "./useWyre";
export default function useDebitCard() {
    const { wyre, partnerId } = useWyre();
    const pay = useCallback(async ({ trigger3ds, ipAddress, amount, sourceCurrency, destCurrency, dest, user: { firstName, lastName, email, street1, city, state, country, postalCode, phone, }, reserve: { reservation }, debitCard, referenceId, }) => {
        const { data: { id: walletOrderId }, } = await wyre({
            url: "v3/debitcard/process",
            method: "post",
            data: {
                trigger3ds,
                referenceId,
                ipAddress,
                sourceCurrency,
                amount,
                destCurrency,
                dest,
                reservationId: reservation,
                accountId: partnerId,
                referrerAccountId: partnerId,
                givenName: firstName,
                familyName: lastName,
                email,
                phone,
                address: {
                    street1,
                    city,
                    state,
                    postalCode,
                    country,
                },
                debitCard,
            },
        });
        const smsNeeded = "000000";
        const card2faNeeded = "0000000";
        return Object.freeze({
            walletOrderId,
            smsNeeded,
            card2faNeeded,
            authorize: async ({ sms, card2fa }) => {
                const { data } = await wyre({
                    url: "v3/debitcard/authorize/partner",
                    method: "post",
                    data: {
                        walletOrderId,
                        type: smsNeeded && card2faNeeded
                            ? "ALL"
                            : smsNeeded
                                ? "SMS"
                                : card2faNeeded
                                    ? "CARD2FA"
                                    : null,
                        ...(!!smsNeeded && { sms }),
                        ...(!!card2faNeeded && { card2fa }),
                    },
                });
                return data;
            },
        });
    }, [wyre, partnerId]);
    return { pay };
}
