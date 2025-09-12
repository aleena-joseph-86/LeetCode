function singleNumber(nums: number[]): number {
    let xor1 = nums[0];
    const n = nums.length;
    for(let i = 1; i < n; i++) xor1^=nums[i];
    return xor1;
};