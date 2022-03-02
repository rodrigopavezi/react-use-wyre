import { AxiosResponse } from "axios";
import { WyreParams } from "../types";
export default function wyre({ baseUrl, url: endpoint, method, data, }: WyreParams): Promise<AxiosResponse>;
