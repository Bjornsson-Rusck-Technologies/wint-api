"use strict";
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
exports.update = exports.create = exports.get = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
const get = (auth, test) => (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios_1.default.get(utils_1.getApiUrl(test) + "/api/Customer/" + id, {
        headers: {
            Authorization: "Basic " + auth
        }
    });
    return res.data;
});
exports.get = get;
const create = (auth, test) => (customer) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios_1.default.post(utils_1.getApiUrl(test) + "/api/Customer/", customer, {
        headers: {
            Authorization: "Basic " + auth
        }
    });
    return res.data;
});
exports.create = create;
const update = (auth, test) => (id) => (customer) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios_1.default.put(utils_1.getApiUrl(test) + "/api/Customer/" + id, customer, {
        headers: {
            Authorization: "Basic " + auth
        }
    });
    return res.data;
});
exports.update = update;
