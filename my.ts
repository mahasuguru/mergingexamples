
let name1 = "maha";

            let bar : number | string;
            bar = 'maha';
            bar = 45 ;
           // let foo = string | null ;
           // foo = 'lakshmi' ;
           // foo = null ;
           // foo = undefined // Wont work Once you Turn on strictNullCheck
            function combine(input1: string | number, input2: string | number) {
            if (typeof input1 === "number" && typeof input2 === "number") {
            return input1 + input2;
            } else {
            return input1.toString() + input2.toString();
            }
            }
            const sum = combine(23, 25);
            console.log("SUM is ", sum);
            const fullName = combine("maha ", "lakshmi");
            console.log(fullName);
               
