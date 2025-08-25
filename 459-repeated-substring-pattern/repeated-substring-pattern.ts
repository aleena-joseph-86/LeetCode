function repeatedSubstringPattern(s: string): boolean {
    let substring = '';
    const s_length = s.length;
    if (s_length === 1) return false;
    for(let i = 0; i < s_length/2; i++) {
        substring+=s[i];
        if (s_length % substring.length === 0) 
            if (substring.repeat(s_length/substring.length) === s) return true;
    }
    return false;
};