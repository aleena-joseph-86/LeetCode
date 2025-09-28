function longestCommonPrefix(strs: string[]): string {
    if(strs.length === 1) return strs[0];
    let answer = "";
    strs.sort((a,b) => a.localeCompare(b));
    const firstString = strs[0];
    const lastString = strs[strs.length-1];
    const n = Math.min(firstString.length, lastString.length);
    for(let i = 0; i < n ; i++) {
        if(firstString[i]!==lastString[i]) break;
        answer+=firstString[i];
    }
    return answer;
}