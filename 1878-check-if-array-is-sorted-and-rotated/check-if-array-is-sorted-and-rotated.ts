// kind of sliding window approach
function check(nums: number[]): boolean {
    const n = nums.length;
    if(n===1) return true;
    let count = 1;
    for(let i = 0 ; i < 2*n; i++){
        if(nums[i%n]<=nums[(i+1)%n]) count++;
        else count = 1;
        
        if(count===n) return true;
    }
    return false;
};