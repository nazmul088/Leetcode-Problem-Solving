function threeSum(nums) {
  nums = nums.sort((a, b) => a - b);
  let soln = [];
  console.log(nums);
  let lastLeft;
  for (let i = 0; i < nums.length - 2; i++) {
    let currentNum = nums[i];
    if(currentNum === nums[i-1]){
        continue;
    }

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      if (nums[i] === nums[i - 1] && nums[l] === nums[lastLeft]) {
        l++;
        continue;
      }
      let sum = nums[l] + currentNum + nums[r];
      if (sum === 0) {
        soln.push([currentNum, nums[l], nums[r]]);
        l++;
        if (nums[l] === nums[l - 1]) {
          l++;
          continue;
        }
      } else if (sum < 0) {
        l++;
        if (nums[l] === nums[l - 1]) {
          l++;
          continue;
        }
      } else {
        r--;
        while(nums[r] === nums[r+1]) {
            r--;
        }
      }
      lastLeft = l;
    }
  }

  if (nums.every((item) => item === 0)) {
    return [nums.slice(0, 3)];
  }

  return soln;
}

console.log(
  threeSum([2,-4,1,2,-2,2,0,2])
);
