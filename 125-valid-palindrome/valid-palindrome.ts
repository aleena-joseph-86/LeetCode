function recur (i: number,l: number, processedString: String): boolean {
    const n = processedString.length;
    if(i>=Math.trunc(n/2)) return true;
    if(processedString[i] !== processedString[l]) return false;
    i++;
    l = n - 1 - i;
    return recur(i, l, processedString);
}

function isPalindrome(s: string): boolean {
    s = s.toLocaleLowerCase();
    const processedString = s.replace(/[^a-z0-9]/g,'');
    let i = 0;
    let n = processedString.length;
    let l = n - 1 - i;
    return recur(i, l, processedString);
};