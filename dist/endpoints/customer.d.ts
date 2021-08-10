import { Customer } from "../types";
export declare const get: (auth: string, test: boolean) => (id: number) => Promise<Customer>;
export declare const create: (auth: string, test: boolean) => (customer: Customer) => Promise<number>;
export declare const update: (auth: string, test: boolean) => (id: number) => (customer: Customer) => Promise<number>;
