class Department {
  private _adminName: string;
  private employess: string[] = [];

  get adminName() {
    //Business Login
    return this._adminName.toUpperCase();
  }

  set adminName(value: string) {
    //Business Logic
    if (value.toLowerCase() == 'max') {
      throw Error('Max is not allowed');
    } else {
      this._adminName = value;
    }
  }

  constructor(
    private id: number,
    private departmentName: string,
    public address: string = 'Kolkata'
  ) {}

  describe() {
    console.log(
      `The department : ${this.departmentName}, Address : ${this.address}`
    );
  }

  addEmployee(name: string) {
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
