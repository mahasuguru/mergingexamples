function addNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (prev, curr) { return prev + curr; }, 0);
}
console.log(addNumbers(23, 24, 25));
