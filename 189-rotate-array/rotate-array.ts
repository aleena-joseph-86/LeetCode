/**
 Do not return anything, modify nums in-place instead.
 */
function reverse(nums: number[]): number[]{
    const l = nums.length;
    const n = Math.trunc(l/2);
    for(let i = 0; i < n; i++) [nums[i], nums[l-1-i]] = [ nums[l-1-i],nums[i]];
    return nums;
}

function rotate(nums: number[], k: number): void {
    const n = nums.length;
    if(n === 1) return;
    k = k % n;
    const p = n - k;
    nums.splice(0,p, ...reverse(nums.slice(0,p)));
    nums.splice(p, n-1, ...reverse(nums.slice(p,n)));
    nums.splice(0,n, ...reverse(nums.slice(0,n)));
};