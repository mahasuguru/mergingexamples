
let name1 = "maha";

let val : string= "mahalakshmi";
console.log(val);
function submit(){
    console.log("am inside function");
    console.log(val);
}
let person1 = {
    name: "John Smith",
    age: 25,
    hobbies: ["Dance", "Code"],
    };
    for (const h of person1.hobbies) {
        console.log(h.toUpperCase());
        }    
       // person.role.push("Employee");
       // person.role[1] = 10; // JS will still run it.
        console.log(person1);
        //Assign Tuple
        let person2: {
        name: string;
        age: number;
        hobbies: string[];
        role: [number, string];
        } = {
        name: "John Smith",
        age: 25,
        hobbies: ["Dance", "Code"],
        role: [1, "Admin"],
        };
        person2.role.push("Employee");
       // person.role[1] = 10; // this will throw an error.
        console.log(person2);
        person2.role = [1, "Admin"]; // This is how you add.
        enum Role {
            ADMIN,
            READ_ONLY,
            AUTHOR,
            }
            let person = {
            name: "John Smith",
            age: 25,
            hobbies: ["Dance", "Code"],
            role: Role.ADMIN,
            };
            console.log(person);
            //Another Query
            enum UserRole {
            Admin = 10,
            Basic_User = 15,
            Registered_User = 18,
            }
            function getRole() {
            return UserRole.Registered_User;
            }
            let bar = getRole();
            if (bar === UserRole.Registered_User) {
            console.log("Inside User Role Using Method Call");
            }
            let foo = UserRole.Basic_User;
            if (foo === UserRole.Basic_User) {
            console.log("Inside User ROle Function Without Using Method Call");
            }
            //You can also get this
            console.log(UserRole.Basic_User);
            console.log(UserRole["Registered_User"]);
            //Show the students what happens when you change the enum to a constant.
            
submit();