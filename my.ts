function addNumbers(...numbers: number[]) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
    }
    console.log(addNumbers(23, 24, 25));