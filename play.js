const fun = (a, b) => a * b;

console.log(`Product: `, fun(2, 3))

let student = {
    name: "Raj",
    age: 23,
    result: `Pass`,

    getResult () {
        console.log(`${this.name}'s result is ${this.result}`);
    }
}

student.getResult();
