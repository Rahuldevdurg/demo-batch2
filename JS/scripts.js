console.log('Hello World!');

// let productName = 'apple',
//   price = 45,
//   isDiscounted = 30;

// const year = 2000;

// console.log(year);
// year = 56;
// console.log(year);

//We can not name a variable with a keyword.
//let let = 12;
//Starts with _ $ or any character

// let _price =90;
// let $price =100;
// let price = 100;
// let 0Price = 100 ;

// {
//   let price2 = 100;
//   var price = 100;
// }

// console.log('PRice ', price);
// console.log('PRice 2', price2);

//number
//string
//boolean
//array
//object
//null
//undefined
//fucntion
//symbols

// let age = 40;
// console.log(age++);
// //Pre Increment - Increase first, then assign
// //Post Increment - Assign first, then increment

// console.log(age);

// let num = 1.1 + 1.3;
// console.log(num);

// console.log(1.1 + 1.3 == 2.4);

// let str1 = "Hello W'orld";
// let str2 = "Hello W'Orld 2";
// let str3 = `This is also a string`;

// console.log(str1);
// console.log(typeof str3);

// let personName = 'Adi';
// console.log('Hello ' + personName);
// console.log(`Hello ${personName}`);

// let bar = '123';
// console.log(bar + 3);
// console.log(bar + '3');
// console.log(3 + bar);

// console.log(typeof 23);
// console.log(typeof '23');
// console.log(typeof true);
// console.log(typeof {});
// console.log(typeof null);

// let foo = 32;
// foo = null;
// console.log(foo);
// console.log(typeof foo);

// let bar;
// console.log(bar);
// console.log(typeof bar);
// console.log(typeof undefined);

// let amount = Number.parseInt('A22.20A');
// console.log(amount);
// console.log(typeof amount);

// let isSaved = true;
// isSaved = !isSaved;

// let bar = null;
// console.log(bar);
// console.log(typeof bar);

//let bar = Number.parseFloat('AV');

// if (2 === '2') {
//   console.log('Inside if');
// } else {
//   console.log('Inside ELSE');
// }

// ==  : Only the Value
// === : Both the value and Type

// 2 === '2' ?  console.log('Inside if') :console.log('Inside ELSE');

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

// while (price < 10) {
//   //Code Body
//   console.log('Inside While', price);
//   price++;
// }

// price = 30;
// do {
//   console.log('Inside Do', price);
//   price++;
// } while (price < 10);

// let price = 30;
// switch (price * 90) {
//   case 50:
//     console.log('50');
//     break;
//   case 60:
//     console.log('60');
//     break;
//   case 70:
//     console.log('70');
//     break;
//   default:
//     console.log('Not found');
//     break;
// }

// let age = 50;
// let fn = function (name, age) {
//   //Function Block
//   console.log(`Hello ${name}, Age - ${age}`);
// };

// fn('Swagat', 40);
// fn('Rahul');
// console.log(age);

// let key = 20;

// let fn = function getSecretCode(code) {
//   let generator = function () {
//     let key = 30;
//     console.log('Inside Key Generator', key);
//     return key;
//   };
//   let secretCode = code * generator();
//   console.log('Inside getSecretCode', key);
//   return secretCode;
// };

// console.log(fn(10));

// let person = {
//   firstName: 'Swagat',
//   age: 35,
//   greet: function (name) {
//     console.log('Hello ' + name);
//   },
// };
// function changeAge(p) {
//   p.age = 60;
// }

// console.log(person.age); //35
// changeAge(person);
// console.log(person.age); //35

// //Pass By Value
// let message = 'HI';
// function changeMessage(p) {
//   p = 'hello';
// }
// changeMessage(message);
// console.log(message); //hello

// console.log(arr[0]);
// console.log(arr[1]);

// arr[1] = 70;
// console.log(arr[1]);
// console.log(arr);

// console.log(typeof arr);

// let months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 1, 'Feb');
// console.log(months);

// function add(num1, num2) {
//   return num1 + num2;
// }

// let addFn = (num1, num2) => num1 + num2;
// console.log(addFn(20, 30));

//Arrow functions
// let months = ['Jan', 'March', 'April', 'June'];
// months.forEach((item) => console.log(item));

// let fruits = ['Apple', 'Banana', 'Grapes'];
// console.log(fruits.indexOf('Banana'));
// console.log(fruits.indexOf('banana'));

let employees = [
  { name: 'Employee One', age: 30, joinedYear: 1990, department: 'Computer' },
  { name: 'Employee Two', age: 40, joinedYear: 2000, department: 'Physics' },
  { name: 'Employee Three', age: 50, joinedYear: 2010, department: 'Computer' },
  {
    name: 'Employee Five',
    age: 35,
    joinedYear: 1998,
    department: 'Chemistry',
  },
  { name: 'Employee Four', age: 20, joinedYear: 2017, department: 'Physics' },
  { name: 'Employee Six', age: 60, joinedYear: 2012, department: 'Chemistry' },
  { name: 'Employee Seven', age: 50, joinedYear: 2019, department: 'Computer' },
  { name: 'Employee Eight', age: 55, joinedYear: 2011, department: 'Physics' },
  { name: 'Employee Nine', age: 12, joinedYear: 1987, department: 'Computer' },
];

// for (let i = 0; i < employees.length; i++) {
//   console.log(employees[i].name);
// }

// employees.forEach((item) => {
//   console.log(item.name);
// });

// let employyesOver30 = [];
// employees.forEach((item) => {
//   if (item.age > 30) {
//     employyesOver30.push(item);
//   }
// });

// employyesOver30 = employees.filter(
//   (item) => item.age > 30 && item.joinedYear > 2000
// );

let ages = employees.map((item) => item.age);
console.log(ages);
