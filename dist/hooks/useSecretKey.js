import { useCallback } from "react";
import useWyre from "./useWyre";
export default function useSecretKey() {
    const { wyre } = useWyre();
    const createSecretKey = useCallback(async ({ secretKey, }) => {
        const { data: { apiKey } } = await wyre({
            url: "v2/sessions/auth/key",
            method: "post",
            data: { secretKey },
        });
        return {
            secretKey,
            apiKey,
            bearerToken: `Bearer ${secretKey}`,
        };
    }, [wyre]);
    return { createSecretKey };
}
