function findMaxConsecutiveOnes(nums: number[]): number {
    const n = nums.length;
    let max = nums[0];
    let count = 0;
    for(let i = 0 ;  i < n; i++) {
        if(nums[i]===1) {
            count++;
            if(count > max) max = count;
        } else {
            count = 0
        };
    }
    return max;
};