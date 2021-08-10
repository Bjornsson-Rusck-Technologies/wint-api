"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectKeysToLowercase = exports.getApiUrl = void 0;
const getApiUrl = (test) => test ? "https://superkollapitest.wint.se" : "https://superkollapi.wint.se";
exports.getApiUrl = getApiUrl;
const objectKeysToLowercase = (obj) => {
    const retObj = {};
    for (const [key, item] of Object.entries(obj)) {
        const newKey = key.charAt(0).toLowerCase() + key.slice(1);
        if (typeof item === "object" && !Array.isArray(item) && item !== null) {
            retObj[newKey] = exports.objectKeysToLowercase(item);
            continue;
        }
        else if (Array.isArray(item)) {
            const array = [];
            for (const element of item) {
                if (typeof element === "object" && !Array.isArray(element) && element !== null) {
                    array.push(exports.objectKeysToLowercase(element));
                    continue;
                }
                else {
                    array.push(element);
                }
            }
            retObj[newKey] = array;
            continue;
        }
        else {
            retObj[newKey] = item;
        }
    }
    return retObj;
};
exports.objectKeysToLowercase = objectKeysToLowercase;
