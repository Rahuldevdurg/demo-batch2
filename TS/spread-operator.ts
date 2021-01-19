console.log('Hello TS');
//Spread Operator
// let hobbies = ['Reading', 'Swimming', 'Music'];
// let activeHobbies = ['Dancing', 'Travelling'];

// // hobbies.push(activeHobbies);

// // for (const h of activeHobbies) {
// //   hobbies.push(h);
// // }

// hobbies.push(...activeHobbies);
// console.log(...hobbies);

// let bar = [1, 2, 3, 4];
// let foo = [...bar];

// foo.push(40, 50);

// console.log('BAR ', bar); //1,2,3,4
// console.log('FOO ', foo); //1,2,3,4,40,50

// let person = {
//   name: 'swagat',
//   age: 30,
// };

// let p = { ...person };
// p.age = 50;

// console.log(person);
// console.log(p);

//Rest Parameter.

// function add(...numbers: number[]) {
//   //   let sum = 0;
//   //   for (const n of numbers) {
//   //     sum += n;
//   //   }
//   //   return sum;

//   return numbers.reduce((prev, next) => prev + next, 0);
// }

// console.log(add(20, 30, 10, 20));
