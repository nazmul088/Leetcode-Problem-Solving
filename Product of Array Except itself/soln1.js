function productExceptItself(nums)  {
    let prefixes = [];
    let suffixes = [];
    

    let product = 1;

    for(let i=0; i< nums.length; i++) {
        if(i === 0 ) {
            product = product * nums[i];
            prefixes.push(1);
            continue;
        }

        prefixes.push(product);
        product = product * nums[i];
    }

    product = 1;

    for(let i = nums.length - 1 ; i >=0 ; i-- ) {
        if( i === nums.length - 1) {
            product = product * nums[i];
            suffixes.push(1);
            continue;
        }

        suffixes.push(product);
        product = product * nums[i];
    }

    for(let i=0; i< nums.length; i++) {
        prefixes[i] = prefixes[i] * suffixes[nums.length - 1 - i ];
    }

    return prefixes;
}

productExceptItself([1,2,4,6]);