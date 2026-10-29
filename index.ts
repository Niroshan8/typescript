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

let password: string | number = 20;

type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

let user: UserInfo | AccountDetails = {
  email: "someone@gmail.com",
  password: "sdsdas123",
};

const items: (number | string)[] = [1, 2, 3, "hello"];

console.log(items);

