//Program to Chack the given number is Prime or Not
function main() {
    //Take values in the variable input
    var input = document.getElementById('input').value;

    //Assign the output of the checkPrimeNumber() to the output
    var output = checkPrimeNumber(input);

    //Print the value of ouptut the the element with id output
    document.getElementById('output').innerHTML = output;
};

function checkPrimeNumber(input) {
    //Prime Number statrts from 2. 
    //Examples are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37...

    //If Input is less than 2, number can not be prime.
    if (input < 2) {
        return false;
    }

    //If input is 2, Number is prime, because 2 is the only EVEN prime number
    else if (input === 2) {
        return true;
    }

    //If a number is divisible by 2, number cant not be prime.
    else if (input % 2 === 0) {
        return false;
    }

    //Now check every whole number from 2 to the square root of n. 
    //If any of these divides n exactly, n cannot be prime.
    for (var i = 3; i * i <= input; i += 2) {
        console.log(i);
        if (input % i === 0) {
            return false;
        }
    }
    return true;
}