
import axios from "axios";
import { GetInvoice, GetListInvoice, ListInvoice, ListInvoiceResponse, PutInvoice } from "../types";
import { getApiUrl, objectKeysToLowercase } from "../utils";

export const get = (auth: string, test: boolean) => async (id: number): Promise<GetInvoice> => {
    const res = await axios.get(getApiUrl(test) + "/api/Invoice/" + id, {
        headers: {
            Authorization: "Basic " + auth
        }
    });

    return objectKeysToLowercase(res.data) as unknown as GetInvoice;
}

export const list = (auth: string, test: boolean) => async (query: GetListInvoice): Promise<ListInvoiceResponse> => {
    const res = await axios.get(getApiUrl(test) + "/api/Invoice/List", {
        params: {
            NumPerPage: query.numPerPage,
            Page: query.page
        },
        headers: {
            Authorization: "Basic " + auth
        }
    });

    const data = res.data as unknown as {
        NumPerPage: number,
        Page: number,
        TotalItems: number,
        TotalItemsWithOutFilter: number,
        Items: ListInvoice[]
    };

    return {
        numPerPage: data.NumPerPage,
        page: data.Page,
        totalItems: data.TotalItems,
        totalItemsWithOutFilter: data.TotalItemsWithOutFilter,
        items: data.Items.map((v) => objectKeysToLowercase(v as any) as unknown as ListInvoice)
    }
}

export const cursor = (auth: string, test: boolean) => async function* () {
    const lister = list(auth, test);

    const { totalItems, numPerPage, items } = await lister({
        numPerPage: 100,
        page: 0
    });

    for (const item of items) {
        yield item;
    }

    const loopAmount = Math.ceil(totalItems / numPerPage);

    for (let page = 1; page < loopAmount; page++) {
        const { items } = await lister({
            numPerPage: 100,
            page: page
        });

        for (const item of items) {
            yield item;
        }
    }
}

export const create = (auth: string, test: boolean) => async (invoice: PutInvoice): Promise<number> => {
    const res = await axios.post(getApiUrl(test) + "/api/Invoice", invoice, {
        headers: {
            Authorization: "Basic " + auth
        }
    });

    return res.data;
}