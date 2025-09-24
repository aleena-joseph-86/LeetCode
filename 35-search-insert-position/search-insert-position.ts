function searchInsert(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    let answer = nums.length;
    while(low<=high) {
        const mid = Math.floor((low+high)/2);
        if(nums[mid] === target) return mid;
        else if(nums[mid]>=target) {
            answer = Math.min(answer, mid);
            high = mid - 1;
        }
       else low = mid + 1;
    }
    return answer;
};