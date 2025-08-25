function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;

    let s_hash = new Map<string, number>();
    let t_hash = new Map<string, number>();

    for(let i = 0; i < s.length; i++) {
        s_hash.set(s[i], (s_hash.get(s[i]) ?? 0) + 1)
        t_hash.set(t[i], (t_hash.get(t[i]) ?? 0) + 1)
    }

    for (const [key, value] of s_hash) {
        if(!t_hash.has(key) || s_hash.get(key) !== t_hash.get(key)) return false;
    }
    
    return true;
};
