function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a,b)=> a - b);
    let answer: number[][] = [];
    const n = nums.length;
    for(let i = 0; i <= n-4; i++) {
        if(i>0 && nums[i]===nums[i-1]) continue;
        for(let j = i+1; j <= n-3; j++) {
            if(j>i+1 && nums[j]===nums[j-1]) continue;
            let k = j + 1;
            let l = n - 1;
            while(k<l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if(sum === target) {
                    answer.push([nums[i], nums[j], nums[k], nums[l]]);
                    do{k++;}while(k<l && nums[k]===nums[k-1]);
                    do{l--;}while(k<l && nums[l]===nums[l+1]);
                } else if (sum < target) {
                    do{k++;}while(k<l && nums[k]===nums[k-1]);
                } else {
                    do{l--;}while(k<l && nums[l]===nums[l+1]);
                }
            }
        }
    }
    return answer;
};