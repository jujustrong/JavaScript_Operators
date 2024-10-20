console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

var a = 20;
var b = 4;
var add = a+b;
var minus = a-b;
var multiply = a*b;
var dividing = a/b;

console.log(add, minus, multiply, dividing)


// Exercise 2
console.log("EXERCISE 2:\n==========\n");

let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

console.log(typeof(num+str), num+str );
console.log(typeof(num+str2), num+str2);
console.log(typeof(num+isPresent) , num+isPresent);
console.log(typeof(firstName+num), firstName+num);
console.log(typeof(isPresent+str), isPresent+str);
console.log(typeof(firstName+lastName), firstName+lastName);

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

console.log(val == str3);
console.log(val === str3);
console.log(!isAwake);
console.log("eleven" == str4 && val >= str3);
console.log(!isAwake || isAwake);
console.log(0 == false);
console.log(0 === false);
console.log(0 != false);
console.log(0 !== false);


