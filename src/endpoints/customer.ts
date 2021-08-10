
import axios from "axios";
import { Customer } from "../types";
import { getApiUrl } from "../utils";

export const get = (auth: string, test: boolean) => async (id: number): Promise<Customer> => {
    const res = await axios.get(getApiUrl(test) + "/api/Customer/" + id, {
        headers: {
            Authorization: "Basic " + auth
        }
    });

    return res.data;
}

export const create = (auth: string, test: boolean) => async (customer: Customer): Promise<number> => {
    const res = await axios.post(getApiUrl(test) + "/api/Customer/", customer, {
        headers: {
            Authorization: "Basic " + auth
        }
    });

    return res.data;
}

export const update = (auth: string, test: boolean) => (id: number) => async (customer: Customer): Promise<number> => {
    const res = await axios.put(getApiUrl(test) + "/api/Customer/" + id, customer, {
        headers: {
            Authorization: "Basic " + auth
        }
    });

    return res.data;
}