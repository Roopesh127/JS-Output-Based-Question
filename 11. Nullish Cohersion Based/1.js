// # Nullish Cohersion ---> [??] , It's treated null and undefined similarlly.

//In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.



// let a= undefined;
// let b =10;
// console.log(a??b)


let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder