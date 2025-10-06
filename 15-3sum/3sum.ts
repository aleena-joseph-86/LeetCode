function threeSum(nums: number[]): number[][] {
    let answer: number[][] = [];
    nums.sort((a,b) => a - b);
    const n = nums.length;
    for(let i = 0; i <= n-3; i++) {
        if(i>0 && nums[i] === nums[i-1]) continue;
        let j = i + 1;
        let k = n - 1;
        while(j<k) {
            let sum = nums[i]+nums[j]+nums[k];
            if(sum===0) {
                answer.push([nums[i], nums[j], nums[k]]);
                 do{
                     j++;
                 }while(j<k && nums[j]===nums[j-1]);
                 do{
                     k--;
                 } while(j<k && nums[k]===nums[k+1]);
            } else if (sum < 0) {
                 do{
                     j++;
                 }while(j<k && nums[j]===nums[j-1]);
            } else {
                do{
                     k--;
                 } while(j<k && nums[k]===nums[k+1]);
            }
        }
    }
    return answer;
};
