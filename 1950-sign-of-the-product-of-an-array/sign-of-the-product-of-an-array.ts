function arraySign(nums: number[]): number {
   let product = 1;
   let minus_count = 0;

   for(let i = 0; i < nums.length; i++) {
       if(nums[i] === 0) return 0;
       if(nums[i] < 0) minus_count++;
   } 

    if(minus_count%2 !== 0) return -1;

   return 1;
};