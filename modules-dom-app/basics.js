/* Multiline comment
  alert("Executed...");
  console.log("Hello Javascript!!!");
*/

// Single line comment

//Variables

//Declaring a variable and assiging value to it
//var version = 1;
// var version; //decalare
// version = 1; //assign value

// console.log("version : " + version);

// var version = "Hello a strange variable declaration!";

// console.log("version : " + version);
// var price = 89;

// price = 90;

// let price = 90;

// console.log("Price : " + price);

// price = 80;

// console.log("Updated Price : " + price);

// const pi = 3.4142;

//how to know the data types

// let price = 90;
// console.log(price);

// console.log(typeof price);


// price = "Hello the quick brown dsfdsafjdsajflkjdslfkjdslakf";
// console.log(price);
// console.log(typeof price);

// price = true;
// console.log(price);
// console.log(typeof price);

// price = 23.091;

// console.log(price);
// console.log(typeof price);


// let cost = new Number();

// let fullName = new String();

// fullName = "Garcia Anthony";

// let students = new Object();

// students.fullName = fullName;
// students.rollnumber = "FA22-BSE-090";
// students.email = "garcia@gmail.com";
// students.whatapp = "+923009098755";


// console.log(students);

// let isEnabled = new Boolean();

// isEnabled = true;


//Loops
// for (let i = 0; i < 10; i++) {
//     console.log("Loop index : " + i);
// }

// let index = 0;
// while (index < 10) {
//     console.log("Loop index : " + index);
//     index = index + 1;
// }



// let numbers = [10, 11, 5, 90, 34, 50, 36];
// console.log("For each loop");
// numbers.forEach(number => {
//     console.log("number: " + number);
// });


function sayHello(msg) {
    if (msg.length > 15) {
        console.log(msg);
    }
    else {
        console.log("Please type atleast more than 15 characters");
    }
}

sayHello("Hello! i am a function");
sayHello("Eid Mubarak");

const connect = () => {
    console.log("I am an arrow function");
}

connect();




















