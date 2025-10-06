function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const l = m+n;
    let index = 0;
    for(let i = m; i < l; i++) {
        nums1[i] = nums2[index++];
    }
    nums1.sort((a,b) => a - b);
};