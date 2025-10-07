function maxDepth(s: string): number {
    const n = s.length;
    let count = 0; 
    let maxCount = -1;
    for(let i = 0; i < n; i++) {
        if(s[i] === '(') count++;
        else if(s[i] === ')') count--;
        maxCount = Math.max(count, maxCount);
    }
    return maxCount;
};