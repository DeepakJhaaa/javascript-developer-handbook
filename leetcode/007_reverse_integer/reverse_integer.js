/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var flag = x < 0 ? true : false;
    x = Math.abs(x);
    var digits = x.toString().split('');
    var reverseInt = digits.reverse().join('');
    reverseInt = parseInt(reverseInt);

    // Assume:Environment could only hold integers within the 32-bit signed integer range. 
    // Assume that your function returns 0 when the reversed integer overflows.
    // Math.pow(2, 31) - will return 32-bit signed integer - JavaScript

    if (reverseInt > Math.pow(2, 31)) {
        return 0;
    }
    else if (flag) {
        return 0 - reverseInt;
    }
    else {
        return reverseInt;
    }
};