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


// const obj = {a:"one" , b:"two" , a : "three"}
// console.log(obj) // {a:"three" , b: "two"}


// for(let i=1;i<5;i++){
//     if(i == 3) continue;
//     console.log(i) //  2 4  // because continue keyword skip value
// }



// const foo = ()=>console.log("first");
// const boo = ()=>setTimeout(()=>console.log("second"))
// const too = ()=>console.log("third");
// boo();
// too();
// foo();

//third
//first
//second


// function sayHi(){
//     return (()=>true)();
// }
// console.log(typeof sayHi()); //boolean


// function sayHi(){
//     return (()=>0)();
// }
// console.log(typeof sayHi()) // number


// function sayHi(){
//     return (()=>"roopesh")()
// }
// console.log(typeof sayHi()) // string


// function sayHi(){
//     return (()=>"sheetal")
// }
// console.log(typeof sayHi())  //function



// const person = {name : "priya"};
// function sayHi(age){
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,22))  // priya is 22
// console.log(sayHi.bind(person,22))  // f()   //  bind will always return a function so require to invoke function
// console.log(sayHi.bind(person,22)()) // priya is 22


// console.log(typeof typeof 1)  // number => string


// const number = [1,2,3]
// number[6] = 11
// console.log(number) // [1,2,3,,,,6]


// const numbers = [1,2,3]
// numbers[9] = numbers;
// console.log(numbers)  // [1,2,3,,,,,]  // It will print infinite loop.


// console.log(!!null)  // false
// console.log(!!"")  // false
// console.log(!!1)  // true


// console.log(setInterval(()=>console.log("hi"),1000));
// console.log(setInterval(()=>console.log("hii2")))


// console.log(setTimeout(()=>console.log("chale chalo"),1000))


// console.log([..."roopesh"]); // ['r','o','p','e','s','h']


// function Car(){
//   this.make  = "tata";
//   return {make : "kia"}
// }
// const myCar = new Car();
// console.log(myCar.make)


// (()=>{
//   let x = (y = 10);
// })()
// console.log(typeof x , y)  // undefined , 10


// (()=>{
//   let x = y = 10;
// })()
// console.log(y)


// (()=>{
//   let x = y = 10;
// })
// (()=>{
//   let x = y = 20;
// })
// console.log(y)  // 10;


// (()=>{
//   let x = y = 10;
// })();
// (()=>{
//   let x = y = 20;
// })();
// console.log(y)  // 20 


// let x = 100;
// (()=>{
//   var x = 10;
// })();
// console.log(x) //100


// const func = (function(a){
//   delete a;
//   return a;
// })(5)
// console.log(func)  // 5 , because delete property is used inside only object.


// let property = "firstName";
// const name1 = "priya";
// const user = {
//   property : name1,
// }
// console.log(user)  // {property : "priya"}

// const user1 = {
//   [property] : name1,
// }
// console.log(user1)



// const user = {
//   name1 : "priya",
//   age :22,
// }
// // for itterate key
// for(let item in user){
//   console.log(item)  // name1 , age
// }
// // for itterate values
// for(let item in user){
//   console.log(user[item])  // priya , 22
// }



// const user = {
//   name : "priya",
//   age : 100
// }
// for(let item in user){
//   if(typeof user[item] === "number"){
//     user[item]*= 2 //  *2  --> return double value 
//   }
// }
// console.log(user)  // "priya" , 200



// const a ={}
// const b = {key : "B"}
// const c = {key : "C"}

// a[b] = 123;
// // a.key3 = "abc";
// // a["key4"] = "def";
// // a[c] = 456;
// a["[object Object]"] = 123

// console.log(a)




// const user = {
//   name : "priya",
//   age : 22,
// }
// // It's convert key in string form.
// const obj1 = (JSON.stringify(user))
// console.log(obj1) // {"name":"priya","age":"22"}

// // It's convert string key in normal format (object).
// const obj2 = (JSON.parse(obj1))
// console.log(obj2) //{name : "priya" , age : 22}



// const user = {
//     naame : "Amardeep",
//     age : 22,
// }
// console.log(JSON.stringify(user,["naame"]))  // {"name":"Amardeep"} // whe we pass as a array then it will return only these and ignore rest data.
// console.log(JSON.stringify(user,["age"]))  // {"age":22}
// console.log(user)  // {naame : "Amardeep" , age : 22}



// const shape = {
//     radius : 10,
//     diameter(){
//         return this.radius*2;
//     }
//     parimeter : ()=> 2*Math.PI*this.radius,
// }
// console.log(shape.diameter()) // 20
// console.log(shape.parimeter()) // NaN  // beacause inside object arrow function will always pointing to window.



// let user = {
//     name : "roopesh",
//     age : 22,
// }
// const name = "Vishal";
//  const {name : myName} = user;
//  console.log(myName)  // roopesh



// for(var i = 1; i<= 3 ; i++ ){ 
//     setTimeout ( ()=>{
//          console. log(i)  // 4 4 4 
//         },1000)
//      }




// let user = {
//     age : 22,
//     fullname : {
//         first : {
//             name : "sheetal",
//             title : "Mrs.",
//         },
//         lastName : "Awadhiya",
//     }
// }
// console.log(user.fullname.first.title) // Mrs.
// const {fullname : {first : {title}}} = user;
// console.log(title)  // Mrs.



// let c = {
//     greeting : "Hey!"
// };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting)  // "hello"



// let person = { name : "shiya" }
// const members = [person];
// person = null;
// console.log(members); // [{ name : "shiya"}]

// let person1 = {name : "shiya"}
// console.log(person1) // {name : "shiya"}

// person1 = null;
// console.log(person1)  // null

// const members = [person1];
// console.log(members)  // [null]

// let person2 = { name : "shiya"}
// const membersss = [person2];
// console.log(membersss)  // [{ name : "shiya"}]
// person2.name = null;
// console.log(person2);  // { name : null}
// console.log(membersss)  // [ { name : null } ]




// console.log(1);

// function print(name){
//     setTimeout(()=>{
//         return `${name}`
//     },1000)
// }
// let value = print("Shiya");
// console.log(value); // undefined , beacause its not wait for setTimeout and executed.

// console.log(2)




// ## NI AAYA SAMJH

// console.log(1);

// function print(name,cb){
//     setTimeout(()=>{
//         cb(`name`)
//     },1000)
// }
// print("priya",(value)=>{
//     console.log(value)
// });

// console.log(2);


// console.log("12"+2) // "122"
// console.log(Number("122"))  // 122 



// console.log(Number("122"))

// let a = "hello";
// console.log(-a)


// function abc(){
//     return 2;
// }
// abc();

// console.log(typeof(abc))

// let obj ={
//     a : 22,
//     pop : ()=>5
// }
// console.log(obj.pop())

// typeof -> Object
// console.log(typeof(obj))


// let arr = [1,2,3,4]
// console.log(typeof(arr))


// (let a= 2>3>4=3)



// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//   }
  
//   sayHi();  // Lydia , 21



// function hoistExample() {
//     var a;
//     console.log("Before: ", a);  
//     a = 10;  
//     console.log("After: ", a);  
//     }
//     hoistExample();





// console.log(foo)
// var foo = "bar";

// function foo() {
//   return "bar";
// }



// (function abc(){
//     console.log("hello")
// })()


const x =5;
 x = 10;
console.log(x)































































































// 810