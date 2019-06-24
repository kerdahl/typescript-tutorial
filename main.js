"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var x = 10;
var y = 20;
var sum; // "let" can be reassigned and modified, but can't declare same variable more than once
var title = "Codevolution"; // "const" cannot be reassigned or modified, and can't declare the same variable more than once
var isBeginner = true; // let <variable>: <type> = <value>
var total = 0;
var name = "Kyle";
// name = true; // does not work; TypeScript enforces matching types. Cannot assign boolean to string
var sentence = "My name is " + name + "\nI am a beginner in TypeScript"; // backticks (`) allow for multi-line string declaration and variable insertion
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined; // null and undefined are treated as subtypes, so they can be assigned to booleans/numbers/strings/etc.
var list1 = [1, 2, 3];
var list2 = [1, 2, 3]; // array declaration syntax; no functional difference between the two
var person1 = ["Chris", 22]; // tuple declaration syntax; fixed types and number of types. i.e. cannot have
// ["Chris", 22, 23] or [22, "Chris"]
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {})); // enum declaration; values start at 0 by default
var c = Color.Green;
console.log(c);
var randomValue = 10; // use "any" type when you don't know what the variable type will be
randomValue = true;
randomValue = "test";
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
var myVariable = 10; // can access non-existant properties/functions of "any" type, or treat as function
console.log(myVariable.name);
// myVariable(); // compiler doesn't see error because of "any" type
// myVariable.toUpperCase(); // compiler doesn't see error because of "any" type
var myVariable2 = "test";
myVariable2.toUpperCase(); // type assertion; similar to type casting in other languages
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
