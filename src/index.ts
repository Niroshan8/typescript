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

// original interface
// interface Car {
//   brand: string;
//   start(): void;
// }

// // Declaration merging (interface extention)
// interface Car {
//   model: string;
//   stop(): void;
// }

// const myCar: Car = {
//   brand: "BMW",
//   model: "M3",
//   start() {
//     console.log("Start");
//   },
//   stop() {
//     console.log("Stop");
//   },
// };

// myCar.start();
// myCar.stop();

// ---------------- Grnerics -----------------

// function printNumber(item: number, deafultValue: number): [number, number] {
//   return [item, deafultValue];
// }

// function printString(item: string, deafultValue: string): [string, string] {
//   return [item, deafultValue];
// }

// function printBool(item: boolean, deafultValue: boolean): [boolean, boolean] {
//   return [item, deafultValue];
// }

// const num = printNumber(1, 2);
// const str = printString("hello", "world");
// const bool = printBool(true, false);

// console.log(num);
// console.log(str);
// console.log(bool);

// not suitable solution (not using typescript)

// function printAny(item: any, deafultValue: any): [any, any] {
//   return [item, deafultValue];
// }

// const num = printAny(1, "something");
// console.log(num);

// real solutin using <Type>

// function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
//   return [item, defaultValue];
// }

// const num = uniqueDataTypesFunc<number>(10, 20);
// const str = uniqueDataTypesFunc<string>("hello", "world");
// const bool = uniqueDataTypesFunc<boolean>(true, false);

// console.log(num);
// console.log(str);
// console.log(bool);

// -----------------------

// interface Dog {
//   name: string;
//   breed: string;
// }

// const dog1 = uniqueDataTypesFunc<Dog>(
//   { name: "Buddy", breed: "Labrador" },
//   { name: "Deafult", breed: "Unknown" },
// );

// console.log(dog1);

// using key value pairs

// function getRandomKeyValuePairs<T>(obj: { [key: string]: T }): {
//   key: string;
//   value: T;
// } {
//   const keys = Object.keys(obj);
//   const randKey = keys[Math.floor(Math.random() * keys.length)];
//   return { key: randKey, value: obj[randKey] };
// }

// const stringObject = { a: "apple", b: "bannna", c: "cherry" };
// const randomStringPair = getRandomKeyValuePairs<string>(stringObject);
// console.log(randomStringPair);

// const numberObject = { one: 1, two: 2, three: 3 };
// const randomNumberPair = getRandomKeyValuePairs<number>(numberObject);
// console.log(randomNumberPair);

// ------- consition base example for <>

// function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
//   return array.filter((item) => condition(item));
// }

// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
// console.log(evenNumbers);

// const strinArr = ["apple", "bannna", "cherry", "date"];
// const shortWords = filterArray<string>(strinArr, (word) => word.length < 6);
// console.log(shortWords);

// interface Fruit {
//   name: string;
//   color: string;
// }

// const fruitArray: Fruit[] = [
//   { name: "Apple", color: "Red" },
//   { name: "Banana", color: "Yellow" },
//   { name: "Cherry", color: "Red" },
// ];

// const redFruits = filterArray<Fruit>(
//   fruitArray,
//   (fruit) => fruit.color == "Red",
// );

// console.log(redFruits);

//--- multiple type paramrters
// function reversePair<T, U>(value1: T, value2: U): [U, T] {
//   return [value2, value1];
// }

// const reversedPair = reversePair("hello", 20);
// console.log(reversedPair);

// --- genric classes
// class Box<T> {
//   private content: T;

//   constructor(initialContent: T) {
//     this.content = initialContent;
//   }

//   getContent(): T {
//     return this.content;
//   }

//   setContent(newContent: T): void {
//     this.content = newContent;
//   }
// }

// const stringBox = new Box<string>("Hello, Typescript");
// console.log(stringBox.getContent());

// stringBox.setContent("New Content Added");
// console.log(stringBox.getContent());

// const numberBox = new Box<number>(20);
// console.log(numberBox.getContent());

// numberBox.setContent(100);
// console.log(numberBox.getContent());

// ---------- Type Narrowing ---------------
// -- Type guards

// type MyType = string | number;

// function exampleFunction(value: MyType): void {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }

// exampleFunction("hello");
// exampleFunction(20);

// -- instanceof operator
// class Dog {
//   bark(): void {
//     console.log("woff woff");
//   }
// }

// class Cat {
//   meow(): void {
//     console.log("Meow");
//   }
// }

// function animalSound(animal: Dog | Cat): void {
//   if (animal instanceof Dog) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// const myDog = new Dog();
// const myCat = new Cat();

// animalSound(myDog);
// animalSound(myCat);

// -- intersection types [&]
// type Employee = {
//   id: number;
//   name: string;
// };

// type Manager = {
//   department: string;
//   role: string;
// };

// type ManagerWithEmployeeInfo = Employee & Manager;

// const manager: ManagerWithEmployeeInfo = {
//   id: 123,
//   name: "Alex Merson",
//   department: "Engineering",
//   role: "Team Lead",
// };

// console.log(manager.id);
// console.log(manager.name);
// console.log(manager.department);
// console.log(manager.role);

//----------------
// const substract = (x: number, y: number): number => x - y;
// ---------------

// declaration part (documnet)
// console.log(document);

// -------------------------------------------------------
// ----------- axios library ----------------------------

import axios, { AxiosResponse } from "axios";

// interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const featchData = async () => {
//   try {
//     const response: AxiosResponse<Todo> = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos/1",
//     );
//     console.log("Todo:", response.data);
//   } catch (error: any) {
//     if (axios.isAxiosError(error)) {
//       console.error("Axios Error", error.message);

//       if (error.response) {
//         console.log("Status: ", error.response.status);
//         console.log("Data: ", error.response.data);
//       }
//     } else {
//       console.error("Error", error.message);
//     }
//   }
// };

// featchData();

// ---------- express.js -------------------

import express, { Request, Response } from "express";

const app = express();

const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, Typescript with express!")
})
app.listen(port, () => console.log(`Server running on port ${port}`));
