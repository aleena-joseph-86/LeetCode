/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const n = nums.length;
    let index = 0;
    let minIndex = Number.MAX_SAFE_INTEGER;
    for(let i = n-2 ; i >= 0; i--) {
        if(nums[i]<nums[i+1]) {
            index = i+1;
            minIndex = index;
            while(index<n && nums[index]>nums[i]) {
                minIndex = nums[index]<nums[minIndex] ? index : minIndex;
                index++;
            }
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
            nums.splice(i+1, n, ...nums.slice(i+1,n).sort((a,b) => a - b));
            break;
        }
    }
    if(index === 0) nums.reverse();
};