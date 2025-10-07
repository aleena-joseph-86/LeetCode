function findErrorNums(nums: number[]): number[] {
    const n = nums.length;
    let sn = Math.trunc((n * (n+1))/2);
    let s2n = Math.trunc((n*(n+1)*(2*n+1))/6);
    let sum = 0;
    let squares = 0;
    for(let i = 0; i < n; i++) {
        sum+=nums[i];
        squares+=nums[i]*nums[i];
    }
    let val1 = sum - sn; // x - y = val1
    let val2 = Math.trunc(squares - s2n)/val1;
    let repeated = Math.trunc((val1+val2)/2); // x2 - y2 = val2
    let missing = repeated - val1; // x - y = val1
    return [repeated,missing];
};