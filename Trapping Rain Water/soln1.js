function trap(height) {
    let result = 0;
    for(let i=1; i < height.length; i++ ) {
        let maxLeft = height[i];
        for(let j=0; j < i; j++) {
            if(height[j] > maxLeft) {
                maxLeft = height[j];
            }
        }

        let maxRight = height[i];
        for(let j= i+1 ; j< height.length; j++) {
            if(height[j] > maxRight) {
                maxRight = height[j];
            }
        }

        let res = Math.min(maxLeft, maxRight) - height[i];
        result += res > 0 ? res : 0;
    }

    return result;
}

console.log(trap([0,2,0,3,1,0,1,3,2,1]));