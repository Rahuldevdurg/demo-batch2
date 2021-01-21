// abstract class Department {
//   protected employess: string[] = [];
//   constructor(
//     private departmentName: string,
//     public address: string = 'Kolkata'
//   ) {}

//   abstract describe(): void;

//   addEmployee(name: string) {
//     //Conditions.
//     this.employess.push(name);
//   }

//   printEmployees() {
//     console.log(this.employess);
//   }
// }

// class ITDepartment extends Department {
//   constructor(private reports: string[]) {
//     super('IT Department', 'Bhubaneswar');
//   }

//   describe(): void {
//     console.log('Inside Describe of IT Department');
//   }
//   addReport(reportName: string) {
//     this.reports.push(reportName);
//   }
//   printReports() {
//     console.log('Available Reports ', ...this.reports);
//   }

//   addEmployee(name: string) {
//     if (name.toLowerCase() != 'rahul') {
//       this.employess.push(name);
//     } else {
//       throw Error('Rahul can not be added to IT');
//     }
//   }
// }

// class AccountsDepartment extends Department {
//   constructor(public admins: string[]) {
//     super('Accounts Department', 'JnK');
//   }

//   describe(): void {
//     console.log('Inside Describe of AccountsDepartment');
//   }
// }

// let accounts = new AccountsDepartment([]);
// accounts.describe();
// let it = new ITDepartment(['Monthly Report', 'Yearly Report']);
// it.describe();
