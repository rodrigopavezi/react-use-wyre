import axios from "axios";
export default async function wyre({ baseUrl = "", url: endpoint, method = "get", data = undefined, }) {
    if (typeof endpoint !== "string") {
        throw new Error(`Expected String url, encountered ${endpoint}.`);
    }
    const baseProps = method === "get" ?
        {
            url: `${baseUrl}${endpoint}`,
            method: method,
        } :
        {
            url: `${baseUrl}${endpoint}`,
            method: method,
            data: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
    return axios(baseProps);
}
