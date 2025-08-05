 function longestConsecutive(nums) {
    if(!nums.length) {
        return 0;
    }
    let numSet = new Set(nums);
    let maxLengthSeq = -9999;
    for(let i=0; i< nums.length; i++) {
        if(!numSet.has(nums[i]-1)) {
            //start of a sequence
            let length = 1;
            let index = 1;
            for(let j= 0; j<nums.length ; j++ ) {
                if(numSet.has(nums[i] + index)) {
                    length++;
                    index++;
                    console.log(length);
                }
            }

            maxLengthSeq = Math.max(maxLengthSeq, length);
        }
    }
    
    return maxLengthSeq;
 }

 console.log(longestConsecutive([0,-1]))