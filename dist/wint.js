"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const customer = __importStar(require("./endpoints/customer"));
const article = __importStar(require("./endpoints/article"));
const invoice = __importStar(require("./endpoints/invoice"));
const utils_1 = require("./utils");
function wint(options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const auth = Buffer.from(`${options.username}:${options.password}`).toString("base64");
        try {
            yield axios_1.default.get(utils_1.getApiUrl(options.testEnvironment) + "/api/Auth", {
                headers: {
                    Authorization: "Basic " + auth
                }
            });
        }
        catch (err) {
            throw new Error("Couldn't authenticate user: " + options.username);
        }
        const test = (_a = options.testEnvironment) !== null && _a !== void 0 ? _a : false;
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
        };
    });
}
exports.default = wint;
