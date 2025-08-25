function isMonotonic(nums: number[]): boolean {
    const n = nums.length - 1;
    if(nums[0] - nums[n] < 0){
        for(let i = 0; i< n ; i++) if(nums[i] > nums[i+1]) return false;
    } else {
        for(let i = 0; i < n ; i++) if(nums[i] < nums[i+1]) return false; 
    }
    return true;
};
