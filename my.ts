let hobbies = ["Swimming", "Music"];
let activeHobbies = ["Dancing"];
activeHobbies.push("Reading", "Cycling"); // We can do like this
activeHobbies.push(...hobbies);
console.log(...hobbies);
console.log(...activeHobbies);
let person1 = {
name: "JOHN",
age: 24,
};
let p1 = person1;
p1.age = 30;
console.log(person1);
console.log(p1); // Both will be updated. As they are referenced with memory.
let person = {
name: "JOHN",
age: 24,
};
let p2 = { ...person };
p2.age = 30;
console.log(person);
console.log(p2);