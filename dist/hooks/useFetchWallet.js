import { useCallback } from "react";
import useWyre from "./useWyre";
export default function useFetchWallet() {
    const { wyre } = useWyre();
    const fetchWallet = useCallback(async ({ walletId }, extras) => {
        const { data } = await wyre({
            url: `v2/wallet/${walletId}`,
            method: "get",
        }, extras);
        return data;
    }, [wyre]);
    return { fetchWallet };
}
