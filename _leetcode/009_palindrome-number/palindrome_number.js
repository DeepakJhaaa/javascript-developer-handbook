/**
 * @param {number} x
 * @return {boolean}
 */

/*
*
*
*/
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    var divNum = 1;

    // Max Possible divisible in the multiple of 10, 100, 1000 etc...
    while (parseInt(x / divNum) >= 10) {
        divNum *= 10;
    }

    var left, right;

    while (divNum > 1) {
        // Left Most of digit of number | parseInt will truncate the floating part
        left = parseInt(x / divNum);

        // Moudlus by 10 will return the last digit of any Number | Right most number
        right = x % 10;

        if (left !== right) {
            return false;
        }
        // Remove the left most digit
        x = x % divNum;
        // Remove the right most digit
        x = parseInt(x / 10);

        // Reduce the Divider Number by 100 times
        divNum /= 100;
    }
    return true;
};

// With Considering Extra Space
var isPalindrome = function (x) {
    return x.toString() == x.toString().split('').reverse().join('');
};