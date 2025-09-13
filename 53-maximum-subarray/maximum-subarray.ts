// Kadane's algorithm
function maxSubArray(nums: number[]): number {
    const n = nums.length;
    if(n === 1) return nums[0];
    let sum = 0;
    let max_sum = -999;
    for(let i = 0; i < n; i++) {
        sum+=nums[i];
        if(sum<0) sum = 0;
        max_sum = Math.max(sum, max_sum);
    }
    if(max_sum === 0) {
     return Math.max(...nums);
    }
    return max_sum;
};