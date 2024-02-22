// const user = {
//     email : "my@gmail.com",
//     update : email => {this.email = email}
// };
// user.update("newemail@gmail.com");
// console.log(user.email);  // "my@gmail.com" // because inside arrow function this is always pointing to window.




// greetings();
//  function greetings(){
//     console.log("first greeting");
// };
// greetings();

// function greetings(){
//     console.log("second greetings");
// }
// greetings();




// greetings();

// var greetings = function (){
//     console.log("first greeting");
// };
// greetings();

// function greetings(){
//     console.log("second greetings");
// }
// greetings();

// var greetings = function(){
//     console.log("third greetings")
// }
// greetings()



// var variable = 10;
// (()=>{
//     console.log(variable);
//     variable = 20;
//     console.log(variable);
// })()

// console.log(variable);
// var variable = 30;
// console.log(variable);



// var variable = 10;
// (()=>{
//     console.log(variable);
//     var variable  = 20;
//     console.log(variable);
// })()
// console.log(variable);
// var variable = 30;
// console.log(variable);




// var var1 = 10;
// (()=>{
//     var3 = 35;
//     console.log(var3)
//     var var3 = 45;
//     var2 = 15;
//     console.log(var1)
// })()
// console.log(var2)
// console.log(var3) // var3 is not defied // error
// var var1 = 30;
// console.log(var1);




//  function abc(){
//     let k = 0;
//     return ()=> k++;
// }
// let counter = abc();
// console.log(counter()) // 0

// let counter1 = abc()
// console.log(counter1()) // 0
// console.log(counter())  // 1

// console.log(counter());
// console.log(counter1());
// console.log(counter());



// var fullName = "John";
// var obj = {
//     fullName : "colin",
//     prop : {
//         fullName : "Aure",
//         getFullName : function () {
//             return this.fullName;
//         }
//     },
//     getMyName : function (){
//         return this.fullName;
//     },
//     getFirstName : ()=>{
//         return this.fullName.split(' ')[0];
//     },
//     getLastName : (function () {
//         return this.fullName.split(' ')[1];
//     })()
// }
// console.log(obj.prop.getFullNmae()); //Aure
// console.log(obj.getFirstName()) // john
// console.log(obj.getMyName()); // colin
// console.log(obj.getLastName) // function body



// var hero = {
//     _name : "john",
//     getSecret : function(){
//         return this._name;
//     }
// }
// var stoleSecretIdentity = hero.getSecret;
// console.log(stoleSecretIdentity());

// console.log(hero.stoleSecretIdentity());

// console.log(hero.getSecret());




// const obj = {
//     a:1,
//     b:2,
// }
// console.log(obj.c)



// function namee(a) {
//     console.log(aw)
// }
// namee("roopesh")

// const a = 10;
// a = 20;
// console.log(a)


// const obj = {
//     f : "dhj",
//     b : this.fr,
// }
// console.log(obj.b)




// var display = undefined;
// function display() {}

