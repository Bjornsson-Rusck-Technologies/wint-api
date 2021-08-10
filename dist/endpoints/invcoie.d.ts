import { Invoice } from "../types";
export declare const get: (auth: string, test: boolean) => (id: number) => Promise<Invoice>;
export declare const create: (auth: string, test: boolean) => (invoice: Invoice) => Promise<number>;
