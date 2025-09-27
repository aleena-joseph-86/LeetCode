// Moore's Voting Algorithm 
function majorityElement(nums: number[]): number[] {
    let answer: number[] = [];
    const n = nums.length;
    if(n === 1) return nums;
    let c1 = 0, c2 = 0;
    let e1, e2;
    for(let i = 0; i <  n; i++) {
        if(c1 === 0 && nums[i] !== e2) {
            c1++;
            e1 = nums[i];
        } else if(c2 === 0 && nums[i] !== e1) {
            c2++;
            e2 = nums[i];
        } else if(nums[i] === e1) {
            c1 ++;
        } else if(nums[i] === e2) {
            c2 ++;
        } else {
            c1--;
            c2--;
        }
    }
    c1 = 0, c2 = 0;
    for(let i = 0; i < n; i++) {
        if(nums[i] === e1) c1++;
        if(nums[i] === e2) c2++;
    }
    const times = Math.floor(n/3) + 1;
    if(c1>=times) answer.push(e1);
    if(c2>=times) answer.push(e2);
    return answer;
}