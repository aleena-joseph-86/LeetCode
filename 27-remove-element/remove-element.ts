function removeElement(nums: number[], val: number): number {
    let valp = nums.indexOf(val);
    if(valp===-1) return nums.length;
    const n = nums.length - 1;
    for(let i = n; i > 0; i--) {
        if(valp<=i && nums[i]!==val) {
            [nums[valp], nums[i]] = [nums[i], nums[valp]];
            valp = nums.indexOf(val, valp);
        }
    }
    console.log(nums);
    return nums.filter((item) => item !== val).length;
};