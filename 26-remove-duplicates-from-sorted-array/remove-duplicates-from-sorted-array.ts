function removeDuplicates(nums: number[]): number {
   let uniqueElements = new Set<number>();
    for(let i = 0 ; i < nums.length; i++) uniqueElements.add(nums[i]);
    let i = 0;
    for(const s of uniqueElements) {nums[i] = s; i++};
    return uniqueElements.size;
};