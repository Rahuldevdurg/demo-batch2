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
    static logFiscalYear() {
        console.log('Fiscal Year ', this.fiscalYear);
    }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        else {
            this._instance = new Department(10, 'IT Dep');
            return this._instance;
        }
    }
}
Department.fiscalYear = 2021;
let dep = Department.getInstance();
dep.describe();
dep.addEmployee('Rahul');
dep.addEmployee('Rahul2');
dep.printEmployees();
console.log('Department 2');
let dep2 = Department.getInstance();
dep2.describe();
dep2.printEmployees();
let dep3 = Department.getInstance();
dep3.describe();
dep3.printEmployees();
