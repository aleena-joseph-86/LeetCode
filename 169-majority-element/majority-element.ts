// Moore's voting algorithm
function majorityElement(nums: number[]): number {
    const n = nums.length;
    let count = 0;
    let element = nums[0];
    for(let i = 0; i < n; i++) {
        if(count===0){
            element = nums[i];
            count = 0;
        }
        if(nums[i]===element) count++;
        else count--;
    }
    return element
};