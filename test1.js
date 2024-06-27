const prompt = require('prompt-sync')();
/*//1. the hello world program
console.log("Hello World");

//Add Two Numbers
let a=2;
let b=3;
let c= a+b;
console.log(`Sum of ${a} and ${b} is : ${c} `);



//2.JavaScript Program to Find the Square Root
let a=prompt("enter the givin number : ")
let result=Math.sqrt(a);
console.log(`The Square Of ${a} is square of ${result}`);



//3.JavaScript Program to Calculate the Area of a Triangle
//Area When Base and Height is Known
let Height=prompt("Enter the heght: ")
let base = prompt("Enter The Base Value : ")
let Area = (Height*base)/2
console.log(`The Area of Triangle is : ${Ar}`)

//4.JavaScript Program to Swap Two Variables
let a = prompt("enter the firstr number : ")
let b= prompt("Enter the second number : ")
let temp;
temp = a;
a=b;
b=temp;
console.log(`the value of a after swapping : ${a}`)
console.log(`the value of b after swapping : ${b}`)

//5.JavaScript program to swap two variables using destructuring assignment
const a = prompt("enter the firstr number : ")
const b= prompt("Enter the second number : ")                                       //doubt
[a,b] = [b,a]
console.log(`the value of a after swapping : ${a}`)
console.log(`the value of b after swapping : ${b}`)

//6.Generate a Random Number

const a = Math.random()
console.log(a)
//Get a Random Number between 1 and 10
const b = Math.random()*(10-1)+1;
console.log(`random value between 1 and 10 is ${b}`);

//7.Javascript Program to Check if a number is Positive, Negative, or Zero
const Number=parseInt(prompt("Enter Any Number : "))

if(Number>0){
    console.log(`${Number} is the positive Number`)
}
else if(Number == 0){
    console.log(`${Number} that numer goes to zero`)
}
else if(Number<0){
    console.log(`${Number} is a negative number`)
}

//second way to check the nested if...else
const number = prompt("Enter a number: ");
if (number>=0){
    if(number == 0){
        console.log("the number is zero")
    }
    else{
        console.log("the number is positive number")
    }
}
else{
    console.log("the number is negative number")
}

//7.Javascript Program to Check if a Number is Odd or Even
const number = prompt("Enter The given Number : ")

if(number%2==0){
    console.log("The NUmber Is even number")
}
else{
    console.log("the number is odd number")
}

//another model is 
const number = prompt("Enter The given Number : ")

let result = (number%2==0)?"even":"odd"
console.log(result);

//8.JavaScript Program to Check Prime Number
const number = parseInt(prompt("enter any number: "));
let isPrime = true;
if (number===1){
    console.log("is prime Or composite number")
}
else if(number>1){
    for(let i=2;i<number;i++){
        if(number%i == 0){
            isPrime=false;     //dobut
            break;
        }
    }
    if(isPrime){
        console.log("is a prime number")
    }
    else{
        console.log("is not a prime number")
    }
}
else{
    console.log("is not aprime number")
}
//9.JavaScript Program to Print All Prime Numbers in an Interval

const n1 = parseInt(prompt("enter any number: "));
const n2 = parseInt(prompt("enter any number: "));

for (let i=n1;i<=n2;i++){
    let prime =0;

    for(let j=2;j<i;j++){
        if(i%j == 0){
            prime = 1;
            break;
        }
    }
    if(i>1 && prime == 0){
        console.log(i);
    }
}*/

//10.JavaScript Program to Find the Factorial of a Number
const number = parseInt(prompt("Enter any number : "))
if(number<0){
    console.log("error this is negative number")
}
else if (number == 0){
    console.log("the factorial of 0 is 1")
}