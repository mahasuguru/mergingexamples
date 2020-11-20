var name1 = "maha";
var val = "mahalakshmi";
console.log(val);
function submit() {
    console.log("am inside function");
    console.log(val);
}
var person1 = {
    name: "John Smith",
    age: 25,
    hobbies: ["Dance", "Code"]
};
for (var _i = 0, _a = person1.hobbies; _i < _a.length; _i++) {
    var h = _a[_i];
    console.log(h.toUpperCase());
}
// person.role.push("Employee");
// person.role[1] = 10; // JS will still run it.
console.log(person1);
//Assign Tuple
var person2 = {
    name: "John Smith",
    age: 25,
    hobbies: ["Dance", "Code"],
    role: [1, "Admin"]
};
person2.role.push("Employee");
// person.role[1] = 10; // this will throw an error.
console.log(person2);
person2.role = [1, "Admin"]; // This is how you add.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "John Smith",
    age: 25,
    hobbies: ["Dance", "Code"],
    role: Role.ADMIN
};
console.log(person);
//Another Query
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 10] = "Admin";
    UserRole[UserRole["Basic_User"] = 15] = "Basic_User";
    UserRole[UserRole["Registered_User"] = 18] = "Registered_User";
})(UserRole || (UserRole = {}));
function getRole() {
    return UserRole.Registered_User;
}
var bar = getRole();
if (bar === UserRole.Registered_User) {
    console.log("Inside User Role Using Method Call");
}
var foo = UserRole.Basic_User;
if (foo === UserRole.Basic_User) {
    console.log("Inside User ROle Function Without Using Method Call");
}
//You can also get this
console.log(UserRole.Basic_User);
console.log(UserRole["Registered_User"]);
//Show the students what happens when you change the enum to a constant.
submit();
