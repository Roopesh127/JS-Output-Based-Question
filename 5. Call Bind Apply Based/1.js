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




const person = {name1 : "Piyush"}
ngf vtt