
import axios from "axios";
import { GetInvoice, PutInvoice } from "../types";
import { getApiUrl, objectKeysToLowercase } from "../utils";

export const get = (auth: string, test: boolean) => async (id: number): Promise<GetInvoice> => {
    const res = await axios.get(getApiUrl(test) + "/api/Invoice/" + id, {
        headers: {
            Authorization: "Basic " + auth
        }
    });
    
    return objectKeysToLowercase(res.data) as unknown as GetInvoice;
}

export const create = (auth: string, test: boolean) => async (invoice: PutInvoice): Promise<number> => {
    const res = await axios.post(getApiUrl(test) + "/api/Invoice", invoice, {
        headers: {
            Authorization: "Basic " + auth
        }
    });

    return res.data;
}