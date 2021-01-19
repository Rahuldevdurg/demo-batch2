console.log('Classes !!');
// let person: {
//   fname: string;
//   age: number;
// } = {
//   fname: 'Swagat',
//   age: 29,
// };
class Department {
    //   public departmentName : string;
    //   public address : string;
    constructor(id, departmentName, address = 'Kolkata') {
        this.id = id;
        this.departmentName = departmentName;
        this.address = address;
        //Properties and Behaviours
        this.employess = [];
    }
    describe() {
        console.log(`The department : ${this.departmentName}, Address : ${this.address}`);
    }
    addEmployee(name) {
        //Conditions.
        this.employess.push(name);
        this.printEmployees();
    }
    printEmployees() {
        console.log(this.employess);
    }
}
let dep = new Department(1, 'IT Department');
dep.addEmployee('Swagat');
dep.describe();
dep.printEmployees();
let dep2 = new Department(2, 'Accounts Department', 'Delhi');
dep2.describe();
console.log(dep);
