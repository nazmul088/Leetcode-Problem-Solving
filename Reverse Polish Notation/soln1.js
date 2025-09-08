function evalRPN(tokens) {
    let stack = [];
    let result;
    for(let token of tokens) {
        if(token === '+' || token === '-' || token === '*' || token === '/') {
            let item1 = Number(stack.pop());
            let item2 = Number(stack.pop());
            if(token === '+') {
                result = item1 + item2;
            }
            else if(token === '-') {
                result = item2 - item1;
            }
            else if(token === '*') {
                result = item1 * item2;
            }
            else if(token === '/') {
                console.log(item1 , item2);
                result = Math.floor(item2 / item1); // As there is problem between floor and round so sometimes result don't match with the leetcode's expectation
            }
            stack.push(result);
            continue;
        }
        stack.push(token);
    }
    return result;
}

console.log(evalRPN(["4","13","5","/","+"]));