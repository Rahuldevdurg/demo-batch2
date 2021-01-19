console.log('Hello from TS2');

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// let num1 = 25;
// let num2 = 30;
// let result = add(num1, num2);
// console.log(result);

//1. number - no difference between integers and floats.
// let bar ;
// bar = 'swagat';
// bar = 34;

// let bar: string;
// let pname: string = 'Swagat';
// bar = `Hello  ${pname}!`;

// console.log(bar);

// let bar: boolean = false;
// console.log(typeof bar);

// let person: {
//   name: string;
//   age: string;
// } = {
//   name: 'Aditi',
//   age: '25',
// };

// console.log(());

//

// let person2 = {
//   name: 'Rahul',
//   age: 23,
//   email: 'email@gmail.com',
// };

// let person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
//   name: 'Aditi',
//   age: 25,
//   hobbies: ['Cooking', 'Music', 'Cricket'],
// };

// person.hobbies.push('Reading');

// for (let i = 0; i < person.hobbies.length; i++) {
//   console.log(person.hobbies[i]);
// }

// for (let h of person.hobbies) {
//   console.log(h.toUpperCase());
// }

// for (let p in person) {
//   console.log(`Property - ${p} : Value - ${person[p]} `);
// }

// let foo = [12, 23, 33];
// console.log(foo);

//Tuples
//admin = 0,
//public_user = 1
//registered_user = 2

// const ADMIN =0;
// const PUBLIC_USER = 1;
// const REGISTERED_USER = 2;

// enum Role {
//   ADMIN = 'ADMIN',
//   PUBLIC_USER = 100,
//   REGISTERED_USER = 200,
// }

// let person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: Role;
// } = {
//   name: 'Aditi',
//   age: 25,
//   hobbies: ['Cooking', 'Music', 'Cricket'],
//   role: Role.ADMIN,
// };

// if (person.role == Role.PUBLIC_USER) {
//   console.log('Inside Admin');
// }

//Enums

//admin = 'admin',
//registered_user = 'registered-user',
//public_user = 'public_user'

// const ADMIN = 60;
// const REGISTERED_USER = 100;
// const PUBLIC_USER = 2000;

// enum RoleEnum {
//   ADMIN = 'ADMIN',
//   REGISTERED_USER = 90,
//   PUBLIC_USER,
// }

// let aditi: {
//   name: string;
//   age: number;
//   role: RoleEnum;
// } = {
//   name: 'Aditi',
//   age: 40,
//   role: RoleEnum.ADMIN,
// };

// if (aditi.role == RoleEnum.ADMIN) {
//   console.log('Aditi is an admin');
// }
// if (aditi.role == RoleEnum.PUBLIC_USER) {
//   console.log('access denied');
// }

// if (aditi.role == RoleEnum.REGISTERED_USER) {
//   console.log('Aditi has only read access');
// }

// let people = [
//   {
//     name: 'Aditi',
//     age: 40,
//     role: RoleEnum.ADMIN,
//   },
//   {
//     name: 'Rahul',
//     age: 50,
//     role: RoleEnum.REGISTERED_USER,
//   },
//   {
//     name: 'Rohit',
//     age: 30,
//     role: RoleEnum.REGISTERED_USER,
//   },
// ];

// console.log(people.filter((item) => item.role == RoleEnum.REGISTERED_USER));

// let bar: any;

// bar = 12;
// bar = {};
// bar = [];
// bar = null;
// bar = undefined;
// bar = true;

// bar = 'royal';
// //console.log((bar as string).toUpperCase());

// if (typeof bar === 'string') {
//   console.log(bar.toUpperCase());
// } else if (typeof bar === 'number') {
//   console.log(bar.toFixed(2));
// }

// let bar: unknown;
// bar = 12;
// bar = {};
// bar = [];
// bar = null;
// bar = undefined;
// bar = true;

// let foo: any;
// foo = bar;

// let ram: string;
// ram = foo;
// ram = bar;

// type Combinable = number | string;

// function add(n1: Combinable, n2: Combinable) {
//   if (typeof n1 == 'number' && typeof n2 == 'number') return n1 + n2;
//   else return n1.toString() + n2.toString();
// }

// console.log(add('Hello ', 'World'));
// console.log(add(11, 12));

// const bar = 20;

// function add(n1: number, n2: number, returnType: 'as-number' | 'as-string') {
//   if (returnType === 'as-number') {
//     return n1 + n2;
//   } else if (returnType === 'as-string') {
//     return n1.toString() + ' - ' + n2.toString();
//   }
// }

// console.log(add(20, 30, 'as-string'));

// let bar: unknown;

// bar = 12;
// bar = {};
// bar = [];
// bar = 'Hello';

// let foo: string = 'Hello WOrld!';

// foo = bar;

// console.log('BAR :', bar);
// console.log('FOO :', foo);

// // You can assign all types to any, and any to all other types
// //
