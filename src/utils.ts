export const getApiUrl = (test: boolean) => test ? "https://superkollapitest.wint.se" : "https://superkollapi.wint.se"


export const objectKeysToLowercase = (obj: Record<string, unknown>) => {
    const retObj: Record<string, unknown> = {};

    for(const [key, item] of Object.entries(obj)) {

        const newKey = key.charAt(0).toLowerCase() + key.slice(1);

        if(typeof item === "object" && !Array.isArray(item) && item !== null) {
            retObj[newKey] = objectKeysToLowercase(item as any);
            continue;
        } else if(Array.isArray(item)) {
            const array = [];
            for(const element of item) {
                if(typeof element === "object" && !Array.isArray(element) && element !== null) {
                    array.push(objectKeysToLowercase(element));
                    continue;
                } else {
                    array.push(element);
                }
            }
            retObj[newKey] = array;

            continue;
        } else {
            retObj[newKey] = item;
        }

    }

    return retObj;

}