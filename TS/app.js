class Department {
    constructor(id, departmentName, address = 'Kolkata') {
        this.id = id;
        this.departmentName = departmentName;
        this.address = address;
        this.employess = [];
    }
    get adminName() {
        //Business Login
        return this._adminName.toUpperCase();
    }
    set adminName(value) {
        //Business Logic
        if (value.toLowerCase() == 'max') {
            throw Error('Max is not allowed');
        }
        else {
            this._adminName = value;
        }
    }
    describe() {
        console.log(`The department : ${this.departmentName}, Address : ${this.address}`);
    }
    addEmployee(name) {
        //Conditions.
        this.employess.push(name);
    }
    printEmployees() {
        console.log('Employees :', ...this.employess);
    }
}
let dep = new Department(10, 'IT');
dep.addEmployee('Rohit');
dep.describe();
dep.printEmployees();
dep.adminName = 'bar';
console.log(dep.adminName);
