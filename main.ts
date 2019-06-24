export { }
let message = "Hello World";
console.log(message);

let x = 10;
let y = 20;

let sum; // "let" can be reassigned and modified, but can't declare same variable more than once
const title = "Codevolution"; // "const" cannot be reassigned or modified, and can't declare the same variable more than once

let isBeginner: boolean = true; // let <variable>: <type> = <value>
let total: number = 0;
let name: string = "Kyle";
// name = true; // does not work; TypeScript enforces matching types. Cannot assign boolean to string
let sentence: string = `My name is ${name}
I am a beginner in TypeScript`; // backticks (`) allow for multi-line string declaration and variable insertion

console.log(sentence);

let n: null = null;
let u: undefined = undefined;
let isNew: boolean = null;
let myName: string = undefined; // null and undefined are treated as subtypes, so they can be assigned to booleans/numbers/strings/etc.

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // array declaration syntax; no functional difference between the two

let person1: [string, number] = ["Chris", 22]; // tuple declaration syntax; fixed types and number of types. i.e. cannot have
// ["Chris", 22, 23] or [22, "Chris"]

enum Color { Red = 5, Green, Blue } // enum declaration; values start at 0 by default
let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10; // use "any" type when you don't know what the variable type will be
randomValue = true;
randomValue = "test";

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}

let myVariable: any = 10; // can access non-existant properties/functions of "any" type, or treat as function
console.log(myVariable.name);
// myVariable(); // compiler doesn't see error because of "any" type
// myVariable.toUpperCase(); // compiler doesn't see error because of "any" type

let myVariable2: unknown = "test";
(myVariable2 as string).toUpperCase(); // type assertion; similar to type casting in other languages
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}

let a; // since a is not initialized, anything can be assigned to it
a = 10;
a = true;

let b = 20; // typescript infers "b" is a number; cannot assign a string to it

let multiType: number | boolean; // can declare a type union with |
multiType = 20;
multiType = true;

