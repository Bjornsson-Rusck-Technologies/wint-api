import { Article } from "../types";
export declare const get: (auth: string, test: boolean) => (id: number) => Promise<Article>;
export declare const create: (auth: string, test: boolean) => (article: Article) => Promise<number>;
