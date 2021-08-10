import { Article, Customer, GetInvoice, PutInvoice } from "./types";
interface Wint {
    customer: {
        get: (id: number) => Promise<Customer>;
        update: (id: number) => (customer: Customer) => Promise<number>;
        create: (customer: Customer) => Promise<number>;
    };
    article: {
        get: (id: number) => Promise<Article>;
        create: (article: Article) => Promise<number>;
    };
    invoice: {
        get: (id: number) => Promise<GetInvoice>;
        create: (invoice: PutInvoice) => Promise<number>;
    };
}
interface WintOptions {
    username: string;
    password: string;
    testEnvironment: boolean;
}
declare function wint(options: WintOptions): Promise<Wint>;
export default wint;
