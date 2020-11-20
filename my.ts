
/*function add(a: number, b: number): number {
    return a + b;
    }
    function add(a: string, b: string): string {
    return a + " " + b;
    }
    function add(a: any, b: any): any {
    return a + b;
    }*/
    //This type of declaration throws an error. We have deal with this differently.
    function add(a: string, b: string): string;
    function add(a: number, b: number): number;
    function add(a: any, b: any): any {
    return a + b;
    }
    add("Hello ", "Steve"); // returns "Hello Steve"
    add(10, 20); // returns 30
 
    function printResult(value: number): undefined {
    console.log("Num is ", value);
    return;
    }
    function addResult(num1: number, num2: number) {
    return num1 + num2;
    }
    //let myFun;
//myFun = printResult;
//myFun(45); //This prints 45
//As this is plain JS, I can still assign anyother value to myFun
let myFun1;
myFun1 = printResult;
myFun1= 19; // This is the new assignment, this compiles perfectly as myFun is of type any.
myFun1(45);
let myFun2: Function; // Therefore, make a small change by assigning the type to the variable.
myFun2 = printResult;
//myFun2 = 19; // This line throws an error.
myFun2(45);
let myFun3: Function;
myFun3 = printResult;
myFun3 = addResult; //However, this still works fine.
myFun3(45);
let myFun: (a: number) => number; //Once I assign the type using declaration, this solves the issue.
myFun = printResult;
//myFun = addResult;
myFun(45);
