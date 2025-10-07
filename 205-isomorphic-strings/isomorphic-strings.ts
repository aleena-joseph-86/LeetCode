function hasValue(hashMap: Map<string, string>, str: String): boolean {
    for(let val of hashMap.values()) {
        if(val === str) return true;
    }
    return false;
}

function isIsomorphic(s: string, t: string): boolean {
    if(s.length !== t.length) return false;

    let hashMap = new Map<string, string>();
    hashMap.set(s[0],t[0]);

    const n = s.length;
    for(let i = 1; i < n; i++) {
        const original = s[i];
        const replacement = t[i];
        if(hashMap.has(original) && hashMap.get(original) === replacement) continue;
        else if(hashMap.has(original) && hashMap.get(original) !== replacement) return false;
        else if(!hashMap.has(original) && !hasValue(hashMap, replacement)) hashMap.set(original, replacement);
        else if(!hashMap.has(original) && hasValue(hashMap, replacement)) return false;
    }

    return true;
};