import { GetInvoice, PutInvoice } from "../types";
export declare const get: (auth: string, test: boolean) => (id: number) => Promise<GetInvoice>;
export declare const create: (auth: string, test: boolean) => (invoice: PutInvoice) => Promise<number>;
