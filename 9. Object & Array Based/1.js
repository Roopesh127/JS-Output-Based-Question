// const obj = {a:"one",b:"two",c:"three"};
// console.log(obj)



// const obj = {a:"one",b:"two",a:"three"}
// console.log(obj)



// let c = {greeting:"hello"}
// let d;
// d = c
// c.greeting = "hey";
// console.log(d.greeting)



// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b)  // true
// console.log(a === b) // false --> beacause new method is always return a object.
// console.log(b == c)  // true
// console.log(b === c) // false




// function getAge(...args){
//     console.log(typeof args)  //  its collect all data in an array and array is object
// }
// getAge(21)




// function checkage(data){
//     if(data === {age: 18}){
//         console.log("you are an adult");         // object is always compared by refrence only.
//     } else if (data == {age :18}){
//         console.log("you are still in age")
//     }else{
//         console.log("Hmm... you don't have an age!!!")  // object is always compared by refrence only.
//     }
// }
// checkage({age : 18})



// const obj = {1 : "a" , 2 : "b" , 3 : "c"};
// const set = new Set([1,2,3,4,5]);

// obj.hasOwnProperty("1")  // true --> beacause key and value both are in object is always in the form of object
// obj.hasOwnProperty(1) // true
// set.has("1") // false -->  beacause inside set value is store in always own data type


// # confusing

// const a = {}
// const b = {key : 'b'};
// const c = {key : 'c'};
// a[b] = 123;
// console.log(a[b])
// a[c] = 456;
// console.log(a[b]);




// const number = [1,2,3]
// console.log(number[10])
// number[10] = 11;
// console.log(number)




// let  person = {name:"pankaj"}
// const members = [person];
// person = null;

// console.log(members)     // [{name:"pankaj"}]



// const item = {
//     name : "suraj",
//     age : 21
// }
// for(let click in item){
//     console.log(click)    // name ,age
// }


// # confusing

// [1,2,3].map(num =>{
//     if(num === "number") return;
//     return num*2;
// });