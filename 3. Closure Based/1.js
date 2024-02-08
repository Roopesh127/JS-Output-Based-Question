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




for(var i = 1;i<= 5;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}


  