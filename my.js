var name1 = "maha";
var user;
var bar;
bar = 5;
bar = "21";
console.log(bar); //This is similar to Any with one difference.
var bar1;
bar1 = 5;
bar1 = "21";
var foo;
//foo = bar1;
console.log(bar); // This does not work
var bar2;
bar = 5;
bar = "21";
var foo1;
if (typeof bar === "string") {
    foo1 = bar;
}
console.log(bar); // This works due to Type assertion
var dog1 = {
    name: "TOM",
    sayHello: function () { return "Hello DOG"; }
};
console.log(dog1.sayHello()); // This WORKS.
var dog = {
    name: "TOM",
    sayHello: function () { return "Hello DOG"; }
};
console.log(dog.sayHello());
//This works only after type assertion.
