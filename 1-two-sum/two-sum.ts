function twoSum(nums: number[], target: number): number[] {
let req_array = []
let sum = 0
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
        sum = nums[i] + nums[j];
        if( sum === target ) {
            req_array = [i, j]
            break
        }
    }
  }
  return req_array
}; 