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

console.log(typeof(num+str), num+str );  // l111
console.log(typeof(num+str2), num+str2); //11eleven
console.log(typeof(num+isPresent) , num+isPresent); //12
console.log(typeof(firstName+num), firstName+num); //Frodo11
console.log(typeof(isPresent+str), isPresent+str); //true11
console.log(typeof(firstName+lastName), firstName+lastName);  //FrodoBaggins

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

console.log(val == str3);  //true
console.log(val === str3);  //false
console.log(!isAwake);  //true
console.log("eleven" == str4 && val >= str3);  //false
console.log(!isAwake || isAwake);  //true
console.log(0 == false);  //true
console.log(0 === false); //false
console.log(0 != false);  //false
console.log(0 !== false); //true


