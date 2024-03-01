// let countClicks = 0;
// button.addEventListener('click', function clickHandler() {
//   countClicks++;   // 1
// });   



// const result = (function immeadiate(number){
//     const message = `number is ${number}`;
//     return message;
// })(100)




// function outer(){
//     var outer = "I am Outer";

//     function inner(){
//         console.log(outer);
//     }
//     inner()
// }
// outer()




// function makecounter(){
//     var count = 0;

//     return function(){
//         return count++; // post increment , ye pehle return karega phir value badhayega
//     };
// }
// var counter1 = makecounter();
// var counter2 = makecounter();
// console.log(counter1()); // 0
// console.log(counter1()); // 1
// console.log(counter2()); // 0
// console.log(counter2()); // 1




// function makecounter(){
//     var count = 0;

//     return function(){
//         return ++count; // pre increment , ye pehle value badhayega phir return karega.
//     };
// }
// var counter1 = makecounter();
// var counter2 = makecounter();
// console.log(counter1()); // 1
// console.log(counter1()); // 2
// console.log(counter2()); // 1
// console.log(counter2()); // 2




// function createmultiplier(multiplier){
//     return function(x){
//         return x*multiplier;
//     };
// }
// var double = createmultiplier(2)
// console.log(double(5)) // 10

// var triple = createmultiplier(3)
// console.log(triple(8)) // 24




// for(var i = 1;i<= 5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000);
// }


// for (var i = 1; i <= 5; i++) {
//     (function(j) {
//       setTimeout(function() {
//         console.log(j);
//       }, 1000 * j);
//     })(i);
//   }
  



// function outer() {
//     var x = 10;
    
//     function inner(y) {
//       console.log(x + y);
//     }
    
//     return inner;
//   }
  
//   var closureFunc = outer();
//   closureFunc(5); // Output?
  



// function outer() {
//     var x = 20;
  
//     function inner() {
//       console.log(x);
//     }
  
//     x = 30;
//     return inner;
//   }
  
//   var closureFunc = outer();
//   closureFunc(); // Output?
  



// function generateFunctions() {
//     var functions = [];
    
//     for (var i = 0; i < 3; i++) {
//       functions.push(function() {
//         console.log(i);
//       });
//     }
    
//     return functions;
//   }
  
//   var funcs = generateFunctions();
//   for (var j = 0; j < funcs.length; j++) {
//     funcs[j](); // Output?
//   }
  



// function countdown() {
//     var count = 3;
  
//     return function() {
//       if (count > 0) {
//         console.log(count--);
//       } else {
//         console.log('Liftoff!');
//       }
//     };
//   }
  
//   var timer = countdown();
//   timer(); // Output?
//   timer(); // Output?
//   timer(); // Output?
//   timer(); // Output?




// var x = 5;

// function outer() {
//   var x = 10;

//   function inner() {
//     console.log(x);
//   }

//   return inner;
// }

// var closureFunc = outer();
// closureFunc(); // Output?

  


// function createIncrementer() {
//     var count = 0;
  
//     return function() {
//       return ++count;
//     };
//   }
  
//   var inc1 = createIncrementer();
//   var inc2 = createIncrementer();
  
//   console.log(inc1()); // Output?
//   console.log(inc1()); // Output?
//   console.log(inc2()); // Output?
//   console.log(inc2()); // Output?
  




// function foo() {
//     var a = 5;
//     setTimeout(function() {
//       console.log(a);
//       a = 10;
//     }, 1000);
//   }
  
//   foo(); // Output?
  



// function outer() {
//     var x = 1;
//     setTimeout(function() {
//       var y = 2;
//       console.log(x + y);
//     }, 1000);
//   }
  
//   outer(); // Output?





// function createIncrementer() {
//     var count = 0;
  
//     return function() {
//       return ++count;
//     };
//   }
  
//   var inc1 = createIncrementer();
//   var inc2 = createIncrementer();
  
//   console.log(inc1()); // Output?
//   console.log(inc1()); // Output?
//   console.log(inc2()); // Output?
  




//#confusing

// var funcs = [];

// for (var i = 0; i < 3; i++) {
//   funcs[i] = function() {
//     console.log(i);
//   };
// }
// funcs[0](); // Output?
// funcs[1](); // Output?
// funcs[2](); // Output?

// outer(); 

// function outer() {
//     var x = 1;
  
//     inner();
//     function inner() {
//       console.log(x);
//     //   var x = 2;
//     }
  
   
  }
  
  // Output?
  








