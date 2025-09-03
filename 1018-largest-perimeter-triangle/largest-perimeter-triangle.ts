function largestPerimeter(nums: number[]): number {
    const n = nums.length - 1;
    nums.sort((a,b) => a-b);
    for(let i = n; i >= 2; i--)
        if(nums[i] < nums[i-1] + nums[i-2]) return nums[i] + nums[i-1] + nums[i-2];
    return 0;
};