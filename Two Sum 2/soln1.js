function twoSumtwo(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while(l < r) {
        if(nums[l] + nums[r] === target) {
            return [++l , ++r];   
        }
        else if(nums[l] + nums[r] < target) {
            l++;
        }
        else {
            r--;
        }
    }
}

console.log(twoSumtwo([2,3,4], 6))