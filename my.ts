
let name1 = "maha";

let user : unknown;
let bar: unknown;
bar = 5;
bar = "21";
console.log(bar); //This is similar to Any with one difference.
let bar1: unknown;
bar1 = 5;
bar1 = "21";
let foo: string;
//foo = bar1;
console.log(bar); // This does not work
let bar2: unknown;
bar = 5;
bar = "21";
let foo1: string;
if (typeof bar === "string") {
foo1 = bar;
}
console.log(bar); // This works due to Type assertion
const dog1: any = {
name: "TOM",
sayHello: () => "Hello DOG",
};
console.log(dog1.sayHello()); // This WORKS.
               
const dog: unknown = {
    name: "TOM",
    sayHello: () => "Hello DOG",
    };
    console.log((dog as any).sayHello());
    //This works only after type assertion.
    