// Intersectionn Types
type Admin = {
  name: string;
  priviliges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Ishaan',
  priviliges: ['Owner'],
  startDate: new Date(),
};

// Intersection Types - Finding intersection of all data types
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Type Guards
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  return;
}

type UnknownEmployee = Admin | Employee;

// const anonymous:UnknownEmployee = {
//     name: 'Cheeka',
//     startDate: new Date(),
// }

// TypeGuard with 'in' operator
function printEmployee(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);

  if ('priviliges' in emp) {
    console.log('Priviliges: ' + emp.priviliges);
  }

  if ('startDate' in emp) {
    console.log(emp.startDate);
  }
}

printEmployee(e1);

class Car {
  drive() {
    console.log('Driving a car...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(n: number) {
    console.log(`You can load the ${n} items`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  //   if ('loadCargo' in vehicle) {
  //     vehicle.loadCargo(1000);
  //   }

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
