var name1 = "maha";
var bar;
bar = 'maha';
bar = 45;
// let foo = string | null ;
// foo = 'lakshmi' ;
// foo = null ;
// foo = undefined // Wont work Once you Turn on strictNullCheck
function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var sum = combine(23, 25);
console.log("SUM is ", sum);
var fullName = combine("maha ", "lakshmi");
console.log(fullName);
