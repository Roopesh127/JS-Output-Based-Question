// const foo = () => console.log('first');
// const bar = () => setTimeout(()=>
//           console.log("second"));
// const baz = () => console.log("third");

// foo();
// bar();
// baz();




// #confusing
// for(var i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1); // 333
// }
// for(let i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1) // 012
// }




// let obj = {
//     x : 2,
//     getX : function(){
//         setTimeout(()=>console.log("a"),0); // a
//         new Promise(res => res(1)).then(v=>
//             console.log(v));   // 1
//         setTimeout(()=>console.log("b"),0); //b
//     }
// }
// obj.getX();

// output -> 1,a,b


// let a =10 , b =20;
// setTimeout(function(){
//     console.log("ayush");  // ayush
//     a++;
//     b++;
//     console.log(a+b);  // 11 + 21 = 32
// });
// console.log(a+b) // 30

// output ----> 30 , ayush , 32   --> beacause primrily synchronous task is executed after that asynchronous task.




// function a(){
//     this.site = "ayush";

//     function b(){
//         console.log(this.site); // "ayush"
//     }
//     b();
// }
// var site = "field";
// a();




function a() {
    this.site = 'Ayush';
  
    function b(){
      console.log(this.site);
    }
  
    b();
  }
  
  var site = 'Wikipedia';
  new a();