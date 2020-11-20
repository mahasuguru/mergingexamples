var name1 = "maha";
var val = "mahalakshmi";
console.log(val);
function submit() {
    console.log("am inside function");
    console.log(val);
}
var person = {
    name: "John Smith",
    age: 25,
    hobbies: ["Dance", "Code"]
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var h = _a[_i];
    console.log(h.toUpperCase());
}
submit();
