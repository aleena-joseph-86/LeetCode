function frequencySort(s: string): string {
    let answer = "";
    let hashMap = new Map<string, number>();
    const n = s.length;
    for(let i = 0; i < n; i++) {
        if(hashMap.has(s[i])) {
            let temp = hashMap.get(s[i]) ?? 1;
            temp++;
            hashMap.set(s[i], temp);
        } else hashMap.set(s[i], 1);
    }
    const sortedMap = [...hashMap.entries()].sort((a,b) => b[1] - a[1]);
    sortedMap.forEach(item => answer+=item[0].repeat(item[1]));
    return answer;
};