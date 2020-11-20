var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hobbies = ["Swimming", "Music"];
var activeHobbies = ["Dancing"];
activeHobbies.push("Reading", "Cycling"); // We can do like this
activeHobbies.push.apply(// We can do like this
activeHobbies, hobbies);
console.log.apply(console, hobbies);
console.log.apply(console, activeHobbies);
var person1 = {
    name: "JOHN",
    age: 24
};
var p1 = person1;
p1.age = 30;
console.log(person1);
console.log(p1); // Both will be updated. As they are referenced with memory.
var person = {
    name: "JOHN",
    age: 24
};
var p2 = __assign({}, person);
p2.age = 30;
console.log(person);
console.log(p2);
