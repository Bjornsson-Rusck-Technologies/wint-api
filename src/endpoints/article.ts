
import axios from "axios";
import { Article } from "../types";
import { getApiUrl } from "../utils";

export const get = (auth: string, test: boolean) => async (id: number): Promise<Article> => {
    const res = await axios.get(getApiUrl(test) + "/api/Article/" + id, {
        headers: {
            Authorization: "Basic " + auth
        }
    });

    return res.data;
}

export const create = (auth: string, test: boolean) => async (article: Article): Promise<number> => {
    const res = await axios.post(getApiUrl(test) + "/api/Article", article, {
        headers: {
            Authorization: "Basic " + auth
        }
    });

    return res.data;
}