import { Article, Customer, GetInvoice, PutInvoice } from "./types";
import axios from "axios";
import * as customer from "./endpoints/customer";
import * as article from "./endpoints/article";
import * as invoice from "./endpoints/invoice";
import { getApiUrl } from "./utils";

interface Wint {
    customer: {
        get: (id: number) => Promise<Customer>
        update: (id: number) => (customer: Customer) => Promise<number>
        create: (customer: Customer) => Promise<number>
    },
    article: {
        get: (id: number) => Promise<Article>,
        create: (article: Article) => Promise<number>
    },
    invoice: {
        get: (id: number) => Promise<GetInvoice>
        create: (invoice: PutInvoice) => Promise<number>
    }
}

interface WintOptions {
    username: string,
    password: string,
    testEnvironment: boolean
}

async function wint(options: WintOptions): Promise<Wint> {
    const auth = Buffer.from(`${options.username}:${options.password}`).toString("base64");

    try {
        await axios.get(getApiUrl(options.testEnvironment) + "/api/Auth", {
            headers: {
                Authorization: "Basic " + auth
            }
        });
    } catch(err) {
        throw new Error("Couldn't authenticate user: " + options.username);
    }


    const test = options.testEnvironment ?? false;

    return {
        customer: {
            get: customer.get(auth, test),
            update: customer.update(auth, test),
            create: customer.create(auth, test)
        },
        article: {
            get: article.get(auth, test),
            create: article.create(auth, test)
        },
        invoice: {
            get: invoice.get(auth, test),
            create: invoice.create(auth, test),
        }
    }
}

export default wint;
