//  {
//     let a = 5;
//     console.log(a) // 5
// }
// console.log(a)  // a is not fined




// let friend = "roopesh";

// function getfriend(){
//     console.log(friend); 

//     let enemy = "Amit";
//     return function getenemy(){
//         console.log(enemy)  // 
//     };
    
// }



// function sayHi(){
//     console.log(name);  // undefined
//     console.log(age);  // going to temporal dead zone and refrence error
//     var name  = "ayush";
//     let age = 22;
// }
// sayHi()



// function getage(){
//     'use strict';
//     age = 21;
//     console.log(age); // refrence - age is not defined beacause inside strict mode we can not declare any accidentally variable.
// }
// getage()


// +true          // 1 , beacause by type cohersion it convert true = 1.
// !"ayush"       // flase , beacause filled string is always truthy value.


// let number = 0;
// console.log(number++);     // 0 , there is value 0 but after this value is incremented.
// console.log(++number);     // 2 , after incremented 1 and this is pre postpone then 1+1 = 2.
// console.log(number);       // 2



// String.prototype.giveAyushPizza = () =>{
//     return 'just give Ayush pizza alredy !';
// };
// const name = 'Roopesh';
// name.giveAyushPizza();



// function sayHi(){
//     return (()=>0)();
// }
// console.log(sayHi())   // 0
// console.log(typeof sayHi());



