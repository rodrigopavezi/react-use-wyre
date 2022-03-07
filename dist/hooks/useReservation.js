import { useCallback } from "react";
import useWyre from "./useWyre";
export default function useReservation() {
    const { wyre, partnerId } = useWyre();
    const makeReservation = useCallback(async ({ ...opts }) => {
        const { amount, sourceCurrency, destCurrency, dest, lockFields, paymentMethod, referenceId, country, } = opts;
        const { data: reserve } = await wyre({
            url: "v3/orders/reserve",
            method: "post",
            data: {
                amount,
                sourceCurrency,
                destCurrency,
                dest,
                referrerAccountId: partnerId,
                paymentMethod,
                lockFields,
                country,
                referenceId,
            },
        });
        return Object.freeze({ ...opts, reserve });
    }, [wyre, partnerId]);
    return { makeReservation };
}
