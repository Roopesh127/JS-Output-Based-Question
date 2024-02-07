
// const shape = {
//     radius : 10,
//     diameter(){
//         return this.radius*2;
//     },
//     perimeter : () => 2 * Math.PI * this.radius,
// };
// console.log(shape.perimeter())  // NaN --> beacause inside this there is no concept of this.
// console.log(shape.diameter())   // 20  --> this is always return current context , then it is return 20.




// function Person(firstname,lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
// }
// const member = new Person("ayush","verma");
// Person.getFullname = function(){
//     return `${this.firstname} ${this.lastname}`;
// }
// console.log(member.getFullname()); // type error

// correct -----> 
// Person.prototype.getFullname = function(){
//     return `${this.firstname} ${this.lastname}`;
// }




// function Person(firstname,lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
// }
// const ayush = new Person("ayush","verma")
// console.log(ayush)  // Person {firstname: 'ayush', lastname: 'verma'}

// const sarah = Person("sarah","smith")
// console.log(sarah)  // undefined ... beacause we are not using new keyword.




// let obj = {
//     x:2,
//     getX : function(){
//         console.log(this.x)  // 2
//     }
// }
// obj.getX();




// let x = 5;
// let obj = {
//     x : 2,
//     getx : ()=>{
//         console.log(this.x);  // undefined ---> beacause arrow function is always refer to lexical scope.
//     }
// }
// obj.getx();




// let x = 5;
// let obj = {
//     // x: 2,
//     getX: function(){
//         let x = 10;
//         console.log(this.x);
//     }
// }

//  obj.getX();
// y();





