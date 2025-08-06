function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};


function palindrome(s) {
    let left =0;
    let right = s.length - 1;

    while(left <= right) {
        if(s[left] &&  !isAlphaNumeric(s[left].toLowerCase()))
        {
            left++;
            continue;
        }
        if(s[right] && !isAlphaNumeric(s[right].toLowerCase())){
            right--;
            continue;
        }

        if(s[left]?.toLowerCase() === s[right]?.toLowerCase()) {
            left++;
            right--;
        }
        else{
            return false;
        }
    }

    return true;
}

console.log(palindrome("No lemon, no melon"))