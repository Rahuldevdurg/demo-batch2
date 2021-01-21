export class Department {
  constructor(
    private departmentName: string,
    public address: string = 'Kolkata'
  ) {}

  describe() {
    console.log(
      `The department : ${this.departmentName}, Address : ${this.address}`
    );
  }
}

export enum Role {
  Admin,
  User,
}
