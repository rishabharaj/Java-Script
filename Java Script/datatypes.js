// Variables 
// Variables are containers for storing data values.
// In JavaScript, there are four ways to declare variables: automatically, var, let, and const.


// automatically: The variable is declared automatically when it is assigned a value.
// Automatically declared variables are always global, even if created inside a function.
// This can lead to bugs because it pollutes the global scope.
// Avoid using this method; it is considered bad practice.
x = 5;
y = 6;
z = x + y;

// var: The variable is declared using the var keyword.
// Function-scoped: Variables declared with var are only accessible within the function they are declared in.
// If declared outside a function, they are accessible globally.
var x = 5; // Variable declaration using var
console.log(j); // undefined (hoisted, but not initialized)
var j = 10; 
var j = 20; // Redeclaration allowed

// let: The variable is declared using the let keyword.
// modern way of declaring variables.
// Block-scoped: Variables declared with let are only accessible within the block {} they are declared in.

let t = 6; // Variable declaration using let
// let t = 8;
// No redeclaration in the same scope:


// const: The variable is declared using the const keyword, and its value cannot be changed.
const h = 10; // Variable declaration using const
//      h = 20; // Error: Assignment to constant variable

// Block-scoped: Like let, const is only accessible within the block {} it is declared in.
// no redeclaration in the same scope:




// JavaScript Data Types
// JavaScript is a dynamically typed language, meaning you don't have to specify the type of a variable when you declare it.
// The type is determined automatically when the program is run.
// JavaScript has 8 data types:


// 1. Number
let num = 10; // Number
let num1 = 10.5; // Number
let num2 = 10e5; // Number
let num3 = 10e-5; // Number  

// 2. String
let str = "Hello World"; // String
let str1 = 'Hello World'; // String
let str2 = `Hello World`; // String
let str3 = String(10); // String
let str4 = String(10.5); // String
let str5 = String(10e5); // String

// 3. Boolean
let bool = true; // Boolean
let bool1 = false; // Boolean

// 4. Undefined
let undef = undefined; // Undefined
let undef1; // Undefined

// 5. Null
let nul = null; // Null

// 6. Symbol
let sym = Symbol(); // Symbol
let sym1 = Symbol(10); // Symbol
let sym2 = Symbol("Hello"); // Symbol

// 7. BigInt
let bigInt = BigInt(10); // BigInt
let bigInt1 = 100; //  BigInt



// 8. Object

// Object: Represents a collection of key-value pairs, used to store more complex data structures.
let person = {
    name: "bhoot",
    age: 100,
    city: "shamsan"
  };
  console.log(person); // Output: { name: 'John Doe', age: 30, city: 'New York' } 
  console.log(person.name); // Output: John Doe

let obj = {}; // Object
    obj.name = "bhootni";
    obj.age = 99;
// Using the Object Constructor
let obj1 = new Object(); // Object
    obj1.name = "shaitan";
    obj1.age = 200;