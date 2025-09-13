function rearrangeArray(nums: number[]): number[] {
    const n = nums.length - 1;
    let pos = 0;
    let neg = 1;
    let answer = [];
    for(let i =0; i<=n; i++) {
        if(nums[i] > 0) {
            answer[pos]=nums[i];
            pos+=2;
        } else {
            answer[neg]=nums[i];
            neg+=2;
        }
    }
    return answer;
};