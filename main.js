"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var a; // since a is not initialized, anything can be assigned to it
a = 10;
a = true;
var b = 20; // typescript infers "b" is a number; cannot assign a string to it
var multiType; // can declare a type union with |
multiType = 20;
multiType = true;
// function declaration; function <function name>(<input>: <input type>, ...): <output type> { }
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5, 10);
add(5);
function addDefault(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
// public: free accessability
// private: only accessible in class
// protected: only accessible in class and inheriting classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello, " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Kyle");
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName, id) {
        var _this = _super.call(this, managerName) || this;
        _this.mID = 1;
        if (id) {
            _this.mID = id;
        }
        return _this;
    }
    Manager.prototype.delegateWork = function () {
        console.log(this.employeeName + " delegating tasks...");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce", 3);
m1.delegateWork();
m1.greet();
console.log(m1.mID);
var m2 = new Manager("Clark");
m2.greet();
m2.delegateWork();
console.log(m2.mID);
