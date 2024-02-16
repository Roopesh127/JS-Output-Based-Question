// ## Priya Bagde repo solution

// console.log(typeof[]) // object

// Type of argument // Object

// console.log(typeof(null))  //object

// console.log(true + false) // 1

// console.log(2+true)  // 3

// console.log("2"+true) // 2true

// console.log(-"34"+10) // -24

// console.log("-34"+10) // -3410

// console.log(+"dude")  // NaN


// var y = 1 ;
// console.log(x = y = typeof(x)) // undefined

// var a = (2,3,5)
// console.log(a)   //5 ,comma operator

// var a = (1,5 - 1)*2
// console.log(a)  // 8 , due to comma opertor

// console.log(!'bang') //false
// console.log(!"roopesh") // false
// console.log(!!"dear") //true

// console.log(parseFloat('12.3.5')) //12.3
// console.log(parseInt("12.3.4"))  //12
// console.log(parseInt(12.3))  // 12

// console.log(Math.max([2,3,4,5])) // NaN
// console.log(Math.max(2,3,4,5)) // 5

// console.log(typeof(NaN)) // number (beacause NaN is itself number data type)

// console.log(null == undefined)  // true

// var a = 2;
// var b = 3;
// console.log(a && b) // 3 , it's logical operator is used to checked first falsy value , if no falsy value then return last value

// console.log(-5%2) // -1
// console.log(-"5"%2)  // -1
// console.log("-5"%2)  // -1
// console.log(5%-2) // 1 , beacause % is always return first value symbol


// ====================================================================================================================================================

// let a = [];
// let b = [];
// console.log(a == b) //false
// console.log(a === b) //false , beacause non primitive data type is always compared by efrence nd refrence is never same.

// let a = [];
// let b =a;
// console.log(b == a) //true
// console.log(a===b)  // true , beacause its share same reference

// let a = [1];
// let b = [1];
// console.log(a[1] == b[1])  // true , 
// console.log(a[1] === b[1]) // true


// let x = [1,2,3]
// let a = {name : "priya"}
// console.log(...x)  // 1,2,3
// console.log([...x])

// console.log(NaN/2)  // NaN

// console.log(10 - - 10) // 20

// const set = new Set([1,1,2,2,3,4,5])
// console.log(set) // it's remove duplicate data and convert into set data type.
// {1,2,3,4,5}   or  {size:5,1,2,3,4,5}

// let data = {name : "priya"}
// console.log(delete data.name) // true
// console.log(data) //{}

// let data = {name : "roopesh"};
// console.log(delete data) //false
// console.log(data) // {name : "roopesh"}

// const data = ["sachin","pankaj","vishal","roopesh"]
// const [y] = data
// console.log(y)  // sachin

// const data = ["sachin","pankaj","vishal","roopesh"]
// const [y,x] = data;
// console.log(y,x)  // sachin pankaj
// console.log(x) // pankaj

// const data = ["roopesh","sachin","vishal"]
// const[,m] = data
// console.log(m) //sachin.

// const data = {name : "priya"}
// const{name} = data;  // how to get the name property without . dot operator
// console.log(name) // priya , (by destructuring we can access data without dot notation.)

// let data = {name : "roopesh"};
// let data1 = {city : "indore"};
// let data2 = {...data,...data1};
// console.log(data2)

// let data = {name : "roopesh"}
// let data1 = {city : "jabalpur"}
// let data2 = {data,...data1}
// console.log(data2)  // {data: {name: "roopesh"}, city: 'jabalpur'}  // isne jo hamne diya uso ek key banaya or jo data aaya usko seedha key ki value me fit kar diya

// let data = {name : "roopesh"}
// let data1 = {city : "jabalpur" , name : "sheetal"}
// data = {...data,...data1}
// console.log(data) // {name: 'sheetal', city: 'jabalpur'}  // updated in old object

// const result = false || {} || 20 || null;
// console.log(result)  // {}  // beacause OR operator searching first truthy value , and first falsy value is {} then it's return it.

// const result = null || false || "";
// console.log(result) // "" is a first truthy value

// const result = 0 || [] || true;
// console.log(result)  // []  // beacause 0 is falsy value and first truthy value is [].

// console.log(Promise.resolve(5)); // Promise {<fulfilled:5>}

// console.log("roopesh" == "roopesh") // true
// console.log("sachin" === "sachin") // true

// console.log(JSON.parse) //parse()

// let name = "sheetal";
// function getname(){
//     console.log(name); // Refrence error , hoisting concept
//     let name = "roopesh";
// }
// getname();

// let name = "sheetal";
// function getname(){
//     console.log(name); // sheetal
// }
// getname();


// let name = "The game changer";
// console.log(typeof name) // string
// console.log(!typeof name) // false
// console.log(typeof name === "object") //false
// console.log(!typeof name === "object") //false
// console.log(typeof name === "string")  // true
// console.log(!typeof name === "string") // false
// console.log(typeof name === false) // false
// console.log(!typeof name === false) // true
// ### beacause we are ! operator , it's always retun false.


// let name = "Vishal";
// let age = 30;
// console.log(isNaN(name)) // true
// console.log(isNaN(age)) // false
// console.log(isNaN(String)) //true

// ## -> if the value is not a number then always return true , if value is false then it return false.



// let person = {name : "Sheetal"}
// console.log(person) // sheetal
// Object.seal(person) // when we are using seal property in object then we can not add more new keys but we can modify it.
// person.name = "Roopesh";
// person.age = 21;
// console.log(person) // Roopesh



// let data = [2,3,4,5,6];
// data.shift() // always remove first element from array and change in old array.
// console.log(data) // [3,4,5,6]


// let data = {name : "roopesh" , age : 22}
// delete data.name;
// console.log(data) // {age:22}


// let data = true;
// // console.log(!!!data) //false
// console.log(typeof !data) // boolean
// console.log(typeof !!data) // boolean
// console.log(!typeof data) //false

// ## -> ! operator value into boolean or false.



// ## map is return new array , but foreach is not return anything.


// let data = ["vishal", "pankaj" , "shubham" , "sachin"];
// delete data[0]
// console.log(data)


// let a = 2;
// setTimeout(()=>{
//     console.log(a) // 100
// },0)
// a = 100;  //100


// let a10 = 33;
// let 10a = 23;
// console.log(a10);  // 33
// console.log(10a);  // 23 , we can not define variable with numerical.


// let a = "hello";
// let b = `hello`;
// console.log(a === b)  // true , because double quote and template litteral are same


// let a = 2;
// let b = 1;
// console.log(a === b) // false
// console.log(--a === b)  // true


// let a = 1;
// let b = 1;
// let c = 2;
// console.log( a === b === -c) // false
// console.log(a === b === --c) // false
// console.log(a === b == --c)  // true

// ## a === b gives true. true === -caches(number) , gives false.



// console.log(a) // a is not defined
// console.log(a);  // undefined beacause of hoisting.
// var a;

// console.log([[[[]]]])  //  [ [ [ [] ] ] ]
// console.log([[[[[[]]]]]])  //  [ [ [ [Array] ] ] ]


// How to find operating system name?
// console.log(navigator.platform) 


// function fruit(){
//     console.log(name)  // undefined
//     console.log(city)  // error , because it's going to temporal dead zone.
//     var name = "roopesh";
//     let city = "jabalpur";
// }
// fruit();


// for(var i=0;i<3;i++){
//     console.log(i); // 0 1 2
//     setTimeout(()=>console.log(i),1); //3 3 3
// }


// for(let i=0;i<3;i++){
//     setTimeout(()=>console.log(i),3000) // 0 1 2 , because of block scope
// }


// let data = "size";
// const bird = {size : "small"}
// console.log(bird[data]); // small
// console.log(bird["size"]) // small
// console.log(bird.size) // small
// console.log(bird.data) // undefined


// let c = {name : "priya"};
// let d;
// d = c;
// c.name = "sheetal";
// console.log(c.name)


// var x;
// let x = 10;
// console.log(x) // we can't Redeclare let variable.


// let  a = 3;
// let b = new Number(3);
// console.log(a == b) // true
// console.log( a === b) // false , because new keyword make object


