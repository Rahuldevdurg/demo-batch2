class Department {
    constructor(departmentName, address = 'Kolkata') {
        this.departmentName = departmentName;
        this.address = address;
        this.employess = [];
    }
    addEmployee(name) {
        //Conditions.
        this.employess.push(name);
    }
    printEmployees() {
        console.log(this.employess);
    }
}
class ITDepartment extends Department {
    constructor(reports) {
        super('IT Department', 'Bhubaneswar');
        this.reports = reports;
    }
    describe() {
        console.log('Inside Describe of IT Department');
    }
    addReport(reportName) {
        this.reports.push(reportName);
    }
    printReports() {
        console.log('Available Reports ', ...this.reports);
    }
    addEmployee(name) {
        if (name.toLowerCase() != 'rahul') {
            this.employess.push(name);
        }
        else {
            throw Error('Rahul can not be added to IT');
        }
    }
}
class AccountsDepartment extends Department {
    constructor(admins) {
        super('Accounts Department', 'JnK');
        this.admins = admins;
    }
    describe() {
        console.log('Inside Describe of AccountsDepartment');
    }
}
let accounts = new AccountsDepartment([]);
accounts.describe();
let it = new ITDepartment(['Monthly Report', 'Yearly Report']);
it.describe();
