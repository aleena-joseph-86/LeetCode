/**
 Do not return anything, modify nums in-place instead.
 */
// Dutch National Flag algorithm
function sortColors(nums: number[]): void {
    let low = 0, mid = 0;
    const n = nums.length;
    let high = n - 1;
    while(mid<=high) {
        if(nums[mid]===0) {
            [nums[mid], nums[low]]  = [nums[low], nums[mid]];
            low++;
            mid++;
        }
        else if(nums[mid]===1) {
            mid++;
        }
        else if(nums[mid]===2) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};