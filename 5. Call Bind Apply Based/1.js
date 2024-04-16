// const person = { name: 'Ayush' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21)); // Ayush is 21
// console.log(sayHi.bind(person, 21));  // return function()

// function sum(a, b) {
//     return a + b;
//   }

//   console.log(sum.call(null, 3, 4)); // Output?

// function greet() {
//     return `Hello, ${this.name}!`;
//   }

//   let person = {
//     name: "Alice"
//   };

//   console.log(greet.call(person)); // Output?

// function Alldetails(age,profession){
//     return `My name is : ${this.name1} , & age is : ${age} , & my Profession is : ${profession} `
// }
// let  Namee = {
//    name1 : "Roopesh",
// };
// console.log(Alldetails.apply(Namee,[22,"Software Engineer"]))

// function calculateSum(numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
//   }

//   console.log(calculateSum.apply(null,[[1, 2, 3, 4, 5]])); // Output?

// function calculateProduct(a, b, c) {
//     return a * b * c;
// }

// let nums = [2, 3, 4];

// console.log(calculateProduct.apply(null, nums)); // Output?

// function calculateArea(length, width) {
//     return length * width;
// }

// // let dimensions = [10, 5];

// console.log(calculateArea.apply(null, [1,2,45,4,5,6])); // Output?

// async function Promise(){
//     const out = new Promise((resolve,reject)=>{
//         resolve("hello I am Run")
//      })
// }
// try{
//     const output = await out;
// }

// Promise()

// let arr = ["one","two","three"]
// for(let x in arr){
//     console.log(x)
// }
// arr[2]

// const person = {name1 : "Piyush"}
// function sayHi(age){
//     return `${this.name1} is ${age}`
// }
// console.log(sayHi.call(person,24));
// console.log(sayHi.bind(person,23));

// const  age = 10;
// var person = {
//     name : "piyush",
//     age : 20,
//     getAge : function(){
//         return this.age;
//     }
// }
// var person2 = {age : 24};
// // console.log(person.getAge.call(person2));
// // console.log(person.getAge.apply(person2))
// console.log(person.getAge.bind(person2))

var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // 🥑
  console.log(data.getStatus.call(this)); // 😎
}, 0);

// const animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Queen' }
//   ];

//   function printAnimals(i) {
//       this.print = function() {
//         console.log('#' + i + ' ' + this.species
//                     + ': ' + this.name);
//       }
//       this.print();
//     }
// //   printAnimals.call(animals)
// for(let i = 0; i<animals.length;i++){
//     printAnimals.call(animals[i],i)
// }

// const array = ['a', 'b'];
// const elements = [0, 1, 2];
// array.push.apply(array,elements);
// console.log(array);

// const numbers = [5, 6, 2, 3, 7];
// console.log(Math.max.apply(null,numbers));
// console.log(Math.min.apply(null,numbers));

// function f() {
//     console.log( this ); // ?
//   }

//   let user = {
//     g: f.bind(null)
//   };

//   user.g();

// function f(){
//     console.log(this.name1);  // john , because we can't change bind context again
// }
// f = f.bind({name1:"john"}).bind({name1:"anna"});
// f();

// function checkpassword(success,failed){
//     let password = prompt("passwword?","");
//     if(password == "Roadsidecoder") success();
//     else failed();
// }

// let user = {
//     name1 : "Piyush",

//     loginsuccessful(){
//         console.log(`${this.name1} logged in`);
//     },

//     loginFailed(){
//         console.log(`${this.name1} failed to login`);
//     },
// };

// checkpassword(user.loginsuccessful , user.loginFailed);

// ##   Call , bind & apply all are not working in arrow function because inside arrow function there is no concept of This keyword.

// const age = 10;

// var person = {
//   name1: "roopesh",
//   age: 20,
//   getArrow: () => console.log(this),
//   getAge: function () {
//     console.log(this.age);
//   },
// };
var person2 = { age: 24 };
person.getArrow.call(person2); // global
person.getAge.call(person2); // 24
