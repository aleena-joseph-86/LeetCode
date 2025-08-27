function romanToInt(s: string): number {
    const map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    const n = s.length - 1;
    let num = 0;
    for(let i = 0; i <= n; i++) {
        if (i+1 > n) break;
        else if(map[s[i]] >= map[s[i+1]]) num += map[s[i]];
        else num -= map[s[i]]; 
    }
    return num+map[s[n]];
};