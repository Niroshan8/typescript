// -------- Anotation ----------------

// // String
// let myName: string = "Niroshan Kavinda";
// console.log(myName);

// // Numbers
// let favNumber: number = 12;
// console.log(favNumber);

// // Boolean
// let tsHard: boolean = false;
// console.log(tsHard);

//--------- Inferring --------------------

// let tech = "TypeScript";
// let favNumber = 8;
// let tsHard = true;

// console.log(typeof tech);
// console.log(typeof favNumber);
// console.log(typeof tsHard);

// ------------- Any Type ---------

// let color: any = "Crimson";
// color = 12;
// color = true;
// color();
// console.log(color);

// --------- Function Parameters Annotatons ----------------

// Regular Func
// function addOne(num: number) {
//   return num + 1;
// }

// const res = addOne(3);
// console.log(res);

// Arrow Func
// const double = (x: number, y: number) => x * y;
// const res = double(2, 10);
// console.log(res);

// --------- Deafult Params Value -----------

// function greet(person: string = "Anonoymous") {
//   return `Hello ${person}`;
// }

// const res = greet("Niroshan");
// console.log(res);

// --------- Return Annotations --------------

// Regular Func
// function double1(x: number): number {
//   return x * x;
// }
// const res = double1(2);
// console.log(res);

// // Arrow Func
// const double2 = (x: number): number => x * x;
// console.log(double2(2));

// ------------- Void ---------------------
// function printMessage(message: string) : void {
//   console.log(`This is my ${message}`);
// }

// printMessage("message");

// -------------- Never -----------------

// ------------- function return a new message
// function throwError(msg: string): never {
//   throw new Error(msg);
// }

// // ----------- function return a infinite loop

// function infiniteLoop() {
//   while (true) {}
// }

// // ----------- devine a variable not value assighn

// let x: never;

// function neverReturns(): never {
//   while (true) {}
// }

// x = neverReturns();

// Arrays Types

// const nums: number[] = [1, 2];
// const str: string[] = ["one", "two", "three"];
// console.log(nums);
// console.log(str);

// const itemes: string[] = [];
// itemes.push("keyboard");
// console.log(itemes);

// const numList: number[] = [];
// numList.push(20);
// console.log(numList);

// const items: Array<string> = ["something"];
// console.log(items);

// const numbers: Array<number> = [1, 2, 3, 4];
// console.log(numbers);

// // ---------- Multi Dimmensional Arrays -----------------

// const singleDi: number[] = [1, 2, 3, 4, 5];
// const multiDi: number[][] = [[1, 2, 3, 4, 5]];
// const triple: number[][][] = [[[1, 2, 3, 4, 5]]];

// console.log(singleDi);
// console.log(multiDi);
// console.log(triple);

// //  --------------- objects ----------------------

// const person: { firstName: string; lastName: string; age: number } = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 10,
// };

// console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

// // function parameters

// function printUser(): { name: string; age: number; location: string } {
//   return {
//     name: "Niroshan",
//     age: 20,
//     location: "Sri Lanka",
//   };
// }

// const res = printUser();
// console.log(res);

//---------- Custoum Type Aliases ----------------

// type User = {
//   name: string;
//   age: number;
//   location: string;
// };

// const printUserInfo = (user: User) => {
//   return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
// };

// const res = printUserInfo({ name: "Alex", age: 20, location: "USA" });
// console.log(res);

// ----------------- Optional Properties ---------------------

// type User = {
//   name: string;
//   age?: number;
//   readonly location: string;
// };

// const user: User = {
//   name: "Niroshan",
//   // age: 20,
//   location: "Sri Lanka",
// };

// // user.location = "saman"; --> Cannot assign to 'location' because it is a read-only property.

// console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);

// ------- Intersection Type (&) -------------
// Intersection Type is combine multiple types in to a single type that includes all the properties and methods of each constituent type

// type UserInfo = {
//   first: string;
//   last: string;
//   age: number;
// };

// type AccountDetails = {
//   email: string;
//   password: string;
// };

// type User = UserInfo & AccountDetails;

// const niroshan: User = {
//   first: "Niroshan",
//   last: "Kavinda",
//   age: 20,
//   email: "niroshanKavinda@gmail.com",
//   password: "nirod4532",
// };

// console.log(
//   `Name: ${niroshan.first} ${niroshan.last} Age: ${niroshan.age} Email: ${niroshan.email} Password: ${niroshan.password}`,
// );

// --------------- Unions (|) ---------------------

// let password: string | number = 20;

// type UserInfo = {
//   first: string;
//   last: string;
//   age: number;
// };

// type AccountDetails = {
//   email: string;
//   password: string;
// };

// let user: UserInfo | AccountDetails = {
//   email: "someone@gmail.com",
//   password: "sdsdas123",
// };

// const items: (number | string)[] = [1, 2, 3, "hello"];

// console.log(items);

// ----------- Literals Type ---------------

//string
// let color: "red" | "crimson" | "fusha";
// color = "red";
// // color = "yellow";
// console.log(color);

// Boolean
// let isTrue: true | false;
// isTrue = true;
// // isTrue = "something";
// console.log(isTrue);

// numbers
// let password: "secerectpassword" = "secerectpassword";
// // password = "sasas5565"
// console.log(password);

// ----- Tuples --------------

// let myTuple: [number, string];
// myTuple = [10, "Hello World"];
// console.log(myTuple);

// const products: (number | string)[] = ["item", 12];
// console.log(products);

// const games: [string, number, boolean] = ["Game 1", 2, true];
// console.log(games);

// --------- Enums -----------------

// enum WeatherConditions {
//   Sunny = "sunny",
//   Cloudy = "cloudy",
//   Rainy = "rainy",
//   Snowy = "snowy",
// }

// const currentWeather = WeatherConditions.Snowy;
// console.log(`The current weather is ${currentWeather}`);

// ------------ class properties annotations -------------

// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person = new Person("John", 20)
// console.log(person);

//----------------- Access modifiers ---------------

// class Human {
//   private first: string;
//   public last: string;
//   protected age: number;

//   constructor(first: string, last: string, age: number) {
//     this.first = first;
//     this.last = last;
//     this.age = age;
//   }

//   getHuman(): string {
//     return `${this.first} ${this.last} Age: ${this.age}`;
//   }
// }

// let p1 = new Human("John", "Doe", 20);
// console.log(p1.getHuman());

// class Person extends Human {
//   constructor(first: string, last: string, age: number) {
//     super(first, last, age);
//   }
// }

// const Niroshan = new Person("Niroshan", "Kavinda", 20);
// console.log(Niroshan);

// // ---------- getters / setters ----------------

// class MyClass {
//   private _myProperty: number = 0;

//   get myProperty(): number {
//     return this._myProperty;
//   }

//   set myProperty(value: number) {
//     this._myProperty = value;
//   }
// }

// const myInstance = new MyClass();

// console.log(`Current Value: ${myInstance.myProperty}`);
// myInstance.myProperty = 10;
// console.log(`Current Value: ${myInstance.myProperty}`);

// --------------- Interfaces ------------------

// // define interface
// interface Computer {
//   name: string;
//   ram: number;
//   hdd: number;
// }

// //use interface
// const computerExample: Computer = {
//   name: "i7",
//   ram: 8,
//   hdd: 100,
// };

// console.log(computerExample.name);
// console.log(computerExample.ram);
// console.log(computerExample.hdd);

// interface Movie {
//   readonly name: string;
//   ratings: number;
//   genra?: string;
// }

// const movie1: Movie = {
//   name: "Star Wars",
//   ratings: 8.9,
//   genra: "Action",
// };

// console.log(movie1);

// Interface create for a functions
// interface MathOperations {
//   (x: number, y: number): number;
// }

// const add: MathOperations = (a, b) => a + b;
// const substract: MathOperations = (a, b) => a - b;

// console.log(add(2, 2));
// console.log(substract(20, 10));

// define interface
// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
//   sayHello(): void;
// }

// // using interface inside this function
// function greet(person: Person) {
//   console.log(`Hello ${person.firstName} ${person.lastName}`);
//   person.sayHello();
// }

// // creating a object same interface right here
// const john: Person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   sayHello() {
//     console.log("Hi There");
//   },
// }

// const niroshan: Person = {
//   firstName: "Niroshan",
//   lastName: "Kavinda",
//   age: 20,
//   sayHello() {
//     console.log("What's good");
//   },
// }

// greet(john);
// greet(niroshan);

// interface Song {
//   songName: string;
//   singerName: string;
//   printSongInfo(songName: string, singerName: string): string;
// }

// const song1: Song = {
//   songName: "Natural",
//   singerName: "Imagin Dragon",
//   printSongInfo: (songName, singerName) => {
//     return `Song: ${songName}, Singer: ${singerName}`;
//   },
// };

// console.log(song1.printSongInfo("Natural", "Imagin Dragon"));

// Interfaces with interfaces

// interface MovieDetails {
//   readonly name: string;
//   ratings: number;
//   printMoiveInfo(name: string, price: number, ratings: number): string | number;
// }

// interface MovieGenra extends MovieDetails {
//   genra: string;
// }

// const movie1: MovieGenra = {
//   name: "Star War",
//   genra: "Action",
//   ratings: 8.9,
//   printMoiveInfo(
//     name: string,
//     price: number,
//     ratings: number,
//   ): string | number {
//     return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
//   },
// };

// const res = movie1.printMoiveInfo("John Wick", 100, 8);
// console.log(res);

//  Interfaces with classes

// interface Vehicle {
//   start(): void;
//   stop(): void;
// }

// class Car implements Vehicle {
//   start(): void {
//     console.log('Car is starting......');
//   }
//   stop(): void {
//     console.log('Car is stopped......');
//   }
// }

// const myCar = new Car();

// myCar.start();
// myCar.stop();

//------------- Declaration merging ----------------


