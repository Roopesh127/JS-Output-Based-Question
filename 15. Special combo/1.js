function abc (x){
    function xyz(a){
    return a*a;
    
    }
    
    return (x)=>{
    console.log(xyz(x,a)
    }
    };const shape = {
      radius: 10,
      diameter() {
        return this.radius * 2;
      },
      perimeter: () => 2 * Math.PI * this.radius,
    };
    
    console.log(shape.diameter());
    console.log(shape.perimeter());
    
    
    //................
    
    +true;
    !'Lydia';
    
    //......................
    
    let c = { greeting: 'Hey!' };
    let d;
    
    d = c;
    c.greeting = 'Hello';
    console.log(d.greeting);
    
    //..........
    What is the event.target when clicking the button?
    <div onclick="console.log('first div')">
      <div onclick="console.log('second div')">
        <button onclick="console.log('button')">
          Click!
        </button>
      </div>
    </div>
    
    
    //........
    
    let a = 3;
    let b = new Number(3);
    let c = 3;
    
    console.log(a == b);
    console.log(a === b);
    console.log(b === c);
    
    //................
    
    let greeting;
    greetign = {}; // Typo!
    console.log(greetign);
    
    
    //...........
    
    function bark() {
      console.log('Woof!');
    }
    
    bark.animal = 'dog';
    
    //..........
    
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    const member = new Person('Lydia', 'Hallie');
    Person.getFullName = function() {
      return `${this.firstName} ${this.lastName}`;
    };
    
    console.log(member.getFullName());
    
    //..........
    
    13. What are the three phases of event propagation?
    A: Target > Capturing > Bubbling
    B: Bubbling > Target > Capturing
    C: Target > Bubbling > Capturing
    D: Capturing > Target > Bubbling
    
    //...............
    
    All object have prototypes.
    A: true
    B: false
    
    //..............
    let number = 0;
    console.log(number++);
    console.log(++number);
    console.log(number);
    
    //.....
    function getPersonInfo(one, two, three) {
      console.log(one);
      console.log(two);
      console.log(three);
    }
    
    const person = 'Lydia';
    const age = 21;
    
    getPersonInfo`${person} is ${age} years old`;
    
    
    //............
    const numbers = [1, 2, 3];
    numbers[10] = 11;
    console.log(numbers);
    
    //......
    
    (() => {
      let x, y;
      try {
        throw new Error();
      } catch (x) {
        (x = 1), (y = 2);
        console.log(x);
      }
      console.log(x);
      console.log(y);
    })();
    
    //............
    Everything in JavaScript is either a...
    A: primitive or object
    B: function or object
    C: trick question! only objects
    D: number or object
    
    //...........
    !!null;
    !!'';
    !!1;
    
    //...........
     What does the setInterval method return in the browser?
    setInterval(() => console.log('Hi'), 1000);
    
    A: a unique id
    B: the amount of milliseconds specified
    C: the passed function
    D: undefined
    
    //......
    const name = 'Lydia';
    age = 21;
    
    console.log(delete name);
    console.log(delete age);
    
    //...........
    
    const numbers = [1, 2, 3, 4, 5];
    const [y] = numbers;
    
    console.log(y);
    
    //...........
    
    let num = 10;
    
    const increaseNumber = () => num++;
    const increasePassedNumber = number => number++;
    
    const num1 = increaseNumber();
    const num2 = increasePassedNumber(num1);
    
    console.log(num1);
    console.log(num2);
    
    //.........
    async function getData() {
      return await Promise.resolve('I made it!');
    }
    
    const data = getData();
    console.log(data);
    
    
    //...
     Is this a pure function?
    function sum(a, b) {
      return a + b;
    }
    
    //....
    const add = () => {
      const cache = {};
      return num => {
        if (num in cache) {
          return `From cache! ${cache[num]}`;
        } else {
          const result = num + 10;
          cache[num] = result;
          return `Calculated! ${result}`;
        }
      };
    };
    
    const addFunction = add();
    console.log(addFunction(10));
    console.log(addFunction(10));
    console.log(addFunction(5 * 2));
    
    //..............
    
    var status = '😎';
    
    setTimeout(() => {
      const status = '😍';
    
      const data = {
        status: '🥑',
        getStatus() {
          return this.status;
        },
      };
    
      console.log(data.getStatus());
      console.log(data.getStatus.call(this));
    }, 0);
    
    A: "🥑" and "😍"
    B: "🥑" and "😎"
    C: "😍" and "😎"
    D: "😎" and "😎"
    
    //..................
    
    const person = {
      name: 'Lydia',
      age: 21,
    };
    
    let city = person.city;
    city = 'Amsterdam';
    
    console.log(person);
    
    //................
    
    
    // module.js
    export default () => 'Hello world';
    export const name = 'Lydia';
    
    // index.js
    import * as data from './module';
    
    console.log(data);
    
    A: { default: function default(), name: "Lydia" }
    B: { default: function default() }
    C: { default: "Hello world", name: "Lydia" }
    D: Global object of module.js
    
    //.........
    
    class Person {
      constructor(name) {
        this.name = name;
      }
    }
    
    const member = new Person('John');
    console.log(typeof member);
    
    //.........
    
    function getItems(fruitList, ...args, favoriteFruit) {
      return [...fruitList, ...args, favoriteFruit]
    }
    
    getItems(["banana", "apple"], "pear", "orange")
    
    A: ["banana", "apple", "pear", "orange"]
    B: [["banana", "apple"], "pear", "orange"]
    C: ["banana", "apple", ["pear"], "orange"]
    D: SyntaxError
    
    //...........
    
    function nums(a, b) {
      if (a > b) console.log('a is bigger');
      else console.log('b is bigger');
      return
      a + b;
    }
    
    console.log(nums(4, 2));
    console.log(nums(1, 2));
    
    //.........
    class Person {
      constructor() {
        this.name = 'Lydia';
      }
    }
    
    Person = class AnotherPerson {
      constructor() {
        this.name = 'Sarah';
      }
    };
    
    const member = new Person();
    console.log(member.name);
    
    //.............
    
    const getList = ([x, ...y]) => [x, y]
    const getUser = user => { name: user.name, age: user.age }
    
    const list = [1, 2, 3, 4]
    const user = { name: "Lydia", age: 21 }
    
    console.log(getList(list))
    console.log(getUser(user))
    
    //..........
    
    // 🎉✨ This is my 100th question! ✨🎉
    
    const output = `${[] && 'Im'}possible!
    You should${'' && `n't`} see a therapist after so much JavaScript lol`
    
    
    //.........
    const one = false || {} || null;
    const two = null || false || '';
    const three = [] || 0 || true;
    
    console.log(one, two, three);
    
    
    //.........
    
    const myPromise = () => Promise.resolve('I have resolved!');
    
    function firstFunction() {
      myPromise().then(res => console.log(res));
      console.log('second');
    }
    
    async function secondFunction() {
      console.log(await myPromise());
      console.log('second');
    }
    
    firstFunction();
    secondFunction();
    
    //..........
    
    const colorConfig = {
      red: true,
      blue: false,
      green: true,
      black: true,
      yellow: false,
    };
    
    const colors = ['pink', 'red', 'blue'];
    
    console.log(colorConfig.colors[1]);
    
    A: true
    B: false
    C: undefined
    D: TypeError
    
    //........
    const add = x => y => z => {
      console.log(x, y, z);
      return x + y + z;
    };
    
    add(4)(5)(6);
    
    //.......
    
    const name = 'Lydia Hallie';
    const age = 21;
    
    console.log(Number.isNaN(name));
    console.log(Number.isNaN(age));
    
    console.log(isNaN(name));
    console.log(isNaN(age));
    
    //............
    
    Which of the following will modify the person object?
    const person = {
      name: 'Lydia Hallie',
      address: {
        street: '100 Main St',
      },
    };
    
    Object.freeze(person);
    A: person.name = "Evan Bacon"
    B: delete person.address
    C: person.address.street = "101 Main St"
    D: person.pet = { name: "Mara" }
    
    
    //..............
    
    
    const person = {
      name: 'Lydia Hallie',
      hobbies: ['coding'],
    };
    
    function addHobby(hobby, hobbies = person.hobbies) {
      hobbies.push(hobby);
      return hobbies;
    }
    
    addHobby('running', []);
    addHobby('dancing');
    addHobby('baking', person.hobbies);
    
    console.log(person.hobbies);
    
    //.............
    
    
    class Bird {
      constructor() {
        console.log("I'm a bird. 🦢");
      }
    }
    
    class Flamingo extends Bird {
      constructor() {
        console.log("I'm pink. 🌸");
        super();
      }
    }
    
    const pet = new Flamingo();
    
    //............
    
    let count = 0;
    const nums = [0, 1, 2, 3];
    
    nums.forEach(num => {
        if (num) count += 1
    })
    
    console.log(count)
    
    //...
    
    function getFruit(fruits) {
        console.log(fruits?.[1]?.[1])
    }
    
    getFruit([['🍊', '🍌'], ['🍍']])
    getFruit()
    getFruit([['🍍'], ['🍊', '🍌']])
    A: null, undefined, 🍌
    B: [], null, 🍌
    C: [], [], 🍌
    D: undefined, undefined, 🍌
    
    //............
    
    class Calc {
        constructor() {
            this.count = 0 
        }
    
        increase() {
            this.count++
        }
    }
    
    const calc = new Calc()
    new Calc().increase()
    
    console.log(calc.count)
    
    //............
    
    
    const user = {
        email: "e@mail.com",
        password: "12345"
    }
    
    const updateUser = ({ email, password }) => {
        if (email) {
            Object.assign(user, { email })
        }
    
        if (password) {
            user.password = password
        }
    
        return user
    }
    
    const updatedUser = updateUser({ email: "new@email.com" })
    
    console.log(updatedUser === user);
    
    //..............
    
    const fruit = ['🍌', '🍊', '🍎']
    
    fruit.slice(0, 1)
    fruit.splice(0, 1)
    fruit.unshift('🍇')
    
    console.log(fruit)
    A: ['🍌', '🍊', '🍎']
    B: ['🍊', '🍎']
    C: ['🍇', '🍊', '🍎']
    D: ['🍇', '🍌', '🍊', '🍎']
    
    
    //...........
    const animals = {};
    let dog = { emoji: '🐶' }
    let cat = { emoji: '🐈' }
    
    animals[dog] = { ...dog, name: "Mara" }
    animals[cat] = { ...cat, name: "Sara" }
    
    console.log(animals[dog])
    A: { emoji: "🐶", name: "Mara" }
    B: { emoji: "🐈", name: "Sara" }
    C: undefined
    D: ReferenceError
    
    
    //...........
    
    const user = {
        email: "my@email.com",
        updateEmail: email => {
            this.email = email
        }
    }
    
    user.updateEmail("new@email.com")
    console.log(user.email)
    A: my@email.com
    B: new@email.com
    C: undefined
    D: ReferenceError
    
    //.............
    
    const promise1 = Promise.resolve('First')
    const promise2 = Promise.resolve('Second')
    const promise3 = Promise.reject('Third')
    const promise4 = Promise.resolve('Fourth')
    
    const runPromises = async () => {
        const res1 = await Promise.all([promise1, promise2])
        const res2  = await Promise.all([promise3, promise4])
        return [res1, res2]
    }
    
    runPromises()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    A: [['First', 'Second'], ['Fourth']]
    B: [['First', 'Second'], ['Third', 'Fourth']]
    C: [['First', 'Second']]
    D: 'Third'
    
    
    //................
    
    What should the value of method be to log { name: "Lydia", age: 22 }?
    const keys = ["name", "age"]
    const values = ["Lydia", 22]
    
    const method = /* ?? */
    Object[method](keys.map((_, i) => {
        return [keys[i], values[i]]
    })) // { name: "Lydia", age: 22 }
    A: entries
    B: values
    C: fromEntries
    D: forEach
    
    //..............
    
    const createMember = ({ email, address = {}}) => {
        const validEmail = /.+\@.+\..+/.test(email)
        if (!validEmail) throw new Error("Valid email pls")
    
        return {
            email,
            address: address ? address : null
        }
    }
    
    const member = createMember({ email: "my@email.com" })
    console.log(member);
    
    A: { email: "my@email.com", address: null }
    B: { email: "my@email.com" }
    C: { email: "my@email.com", address: {} }
    D: { email: "my@email.com", address: undefined }
    
    
    //............
    
    const nums = [1,2,3,4,5,6,7];
    nums.forEach((n) => {
        if(n%2 === 0) 
          break;
        console.log(n);
    });
    
    //...............
    
    function foo() {
      return "I'm the outer function";
    };
    
    
    function test() {
      console.log(bar);
      return foo();
      var bar = "I'm a variable";
      function foo() {
        return "I'm the inner function";
      }
    }
    console.log(test());
    
    //................
    
    let a = true;
    setTimeout(() => {
      a = false;
    }, 2000)
    
    
    while(a) {
      console.log(' -- inside whilee -- ');
    }
    
    //..............
    
    setTimeout(() => console.log(1), 0);
    
    console.log(2);
    
    new Promise(res => {
      console.log(3)
      res();
    }).then(() => console.log(4));
    
    console.log(5);
    
    //.............
    
    async function foo() {
      console.log("A");
      await Promise.resolve();
      console.log("B");
      await new Promise(resolve => setTimeout(resolve, 0));
      console.log("C");
    }
    
    console.log("D");
    foo();
    console.log("E");
    
    
    //.................
    
    
    var a = 10;
    (function () {
      console.log(a);
      var a = 5;
    })();
    
    //........
    
    console.log(1 + "1" - 1);
    
    
    //........
    
    console.log([] + []);
    Answer: “”
    
    //Explanation: When you concatenate two empty arrays, //JavaScript converts them to empty strings, resulting in //an empty string.
    
    
    //............
    
    
    
    
    
    
    
    
    
    
    
    
    
    