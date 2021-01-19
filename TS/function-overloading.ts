//Optional and default parameters
// function add(n1: number, n2: number): string {
//   return n1.toString() + n2.toString();
// }

// function printResult(name: string, greeting: string = 'Hi'): void {
//   console.log(greeting + ' ' + name);
// }

// printResult('Swagat');
// printResult('Swagat', 'Hi');
// printResult('Swagat', 'Hello');

//Function Overloading
// function add(n1:number, n2 : number){
//     return n1+ n2;
// }
// function add(s1:string , s2: string){
//     return s1 + ' ' + s2;
// }

//Function Overloading
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//   if (typeof a == 'string' && typeof b == 'string') {
//     return a + ' ' + b;
//   } else if (typeof a == 'number' && typeof b == 'number') {
//     return a + b;
//   }
// }

// var res1 = add(20, 30);
// var res2 = add('Hello', 'World');
// console.log(res1, res2);
