function increment() {
    var count = 0;

    return function plus() {
        return count++;
    }
};

var countPlus = increment();