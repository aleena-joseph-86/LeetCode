function maxProduct(nums: number[]): number {
    let maxProd = Number.MIN_SAFE_INTEGER;
    const n = nums.length;
    let prefix = 1;
    let suffix = 1;
    for(let i = 0; i < n; i++) {
        prefix*=nums[i];
        suffix*=nums[n-i-1];
        maxProd = Math.max(maxProd, Math.max(prefix, suffix));
        if(prefix === 0 ) prefix = 1;
        if(suffix === 0) suffix = 1;
    }
    return maxProd;
};