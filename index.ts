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

const nums: number[] = [1, 2];
const str: string[] = ["one", "two", "three"];
console.log(nums);
console.log(str);

