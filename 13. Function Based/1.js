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




greetings();

var greetings = function (){
    console.log("first greeting");
};
greetings();

function greetings(){
    console.log("second greetings");
}
greetings();

var greetings = function(){
    console.log("third greetings")
}
greetings()