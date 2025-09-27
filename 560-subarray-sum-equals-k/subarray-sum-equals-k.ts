function subarraySum(nums: number[], k: number): number {
    let hashMap = new Map<number, number>();
    hashMap.set(0,1);
    const n = nums.length;
    let sum = 0;
    let count = 0;
    for(let i = 0; i < n; i++) {
        sum+=nums[i];
        const rem = sum - k;
        
        if(hashMap.has(rem)) count+=hashMap.get(rem);
        
        if(hashMap.has(sum)) {
            let temp = hashMap.get(sum) + 1;
            hashMap.set(sum, temp);
        } else {
            hashMap.set(sum, 1)
        }; 
    }
    return count;
};