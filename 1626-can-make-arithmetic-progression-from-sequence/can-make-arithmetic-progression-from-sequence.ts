function canMakeArithmeticProgression(arr: number[]): boolean {
    arr.sort((a,b) => a - b);
    const diff = arr[0] - arr[1];
    const n = arr.length - 1;
    for(let i = 1; i < n; i++) if(arr[i] - arr[i+1] !== diff) return false;
    return true;
};