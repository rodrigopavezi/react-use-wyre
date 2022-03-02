import axios from "axios";
export default async function wyre({ baseUrl = "", url: endpoint, method = "get", data = undefined, }) {
    if (typeof endpoint !== "string") {
        throw new Error(`Expected String url, encountered ${endpoint}.`);
    }
    const url = `${endpoint}${endpoint.includes("?") ? "&" : "?"}timestamp=${new Date().getTime()}000`;
    const baseProps = {
        url: `${baseUrl}${url}`,
        method: method,
        data: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    return axios(baseProps);
}
