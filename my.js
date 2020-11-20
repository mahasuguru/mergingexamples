function add(a, b) {
    return a + b;
}
add("Hello ", "Steve"); // returns "Hello Steve"
add(10, 20); // returns 30
function printResult(value) {
    console.log("Num is ", value);
    return;
}
function addResult(num1, num2) {
    return num1 + num2;
}
//let myFun;
//myFun = printResult;
//myFun(45); //This prints 45
//As this is plain JS, I can still assign anyother value to myFun
var myFun1;
myFun1 = printResult;
myFun1 = 19; // This is the new assignment, this compiles perfectly as myFun is of type any.
myFun1(45);
var myFun2; // Therefore, make a small change by assigning the type to the variable.
myFun2 = printResult;
//myFun2 = 19; // This line throws an error.
myFun2(45);
var myFun3;
myFun3 = printResult;
myFun3 = addResult; //However, this still works fine.
myFun3(45);
var myFun; //Once I assign the type using declaration, this solves the issue.
myFun = printResult;
//myFun = addResult;
myFun(45);
