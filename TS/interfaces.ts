// console.log('Hello World !');

// // interface IPerson {
// //   //Properties
// //   name: string;
// //   age: number;
// //   //Methods
// //   greet(message: string): void;
// // }

// // let ram: IPerson = {
// //   name: 'RAM',
// //   age: 29,

// //   greet(message: string): void {
// //     console.log(message + ' ' + this.name);
// //   },
// // };
// // ram.greet('Hello');

// interface IVehicle {
//   name: string;

//   start(): void;
//   stop(): void;
// }

// interface IChargable {
//   startCharging(): void;
//   stopCharging(): void;
// }

// class Bus implements IVehicle, IChargable {
//   name: string;

//   constructor(busName: string) {
//     this.name = busName;
//   }

//   start(): void {
//     console.log('Starting a BUS- ', this.name);
//   }
//   stop(): void {
//     console.log('Stopping a BUS- ', this.name);
//   }

//   startCharging(): void {
//     console.log('Charging started for BUS-', this.name);
//   }
//   stopCharging(): void {
//     console.log('Charging stopped for BUS-', this.name);
//   }
// }

// let bus = new Bus('Volvo Bus');
// chargeVehicle(bus);

// class Car implements IVehicle, IChargable {
//   name: string;

//   constructor(private carName: string) {
//     this.name = 'Hi ' + carName;
//   }
//   start(): void {
//     console.log('Starting CAR,' + this.name);
//   }
//   stop(): void {
//     console.log('Stopping CAR,' + this.name);
//   }
//   startCharging(): void {
//     console.log('Charging started for CAR-', this.name);
//   }
//   stopCharging(): void {
//     console.log('Charging stopped for CAR-', this.name);
//   }
// }

// class Mobile implements IChargable {
//   startCharging(): void {
//     console.log('Charging Mobile');
//   }
//   stopCharging(): void {
//     console.log('Stop Charging Mobile');
//   }
// }

// let mobile = new Mobile();
// chargeVehicle(mobile);

// let car = new Car('Maruti 800');
// chargeVehicle(car);

// function chargeVehicle(vehicle: IChargable) {
//   vehicle.startCharging();
//   vehicle.stopCharging();
// }

// // function chargeBus(bus: Bus) {
// //   bus.startCharging();
// //   console.log('Waiting to stop..');
// //   bus.stopCharging();
// // }
// // function chargeCar(car: Car) {
// //   car.startCharging();
// //   console.log('Waiting to stop..');
// //   car.stopCharging();
// // }
