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
