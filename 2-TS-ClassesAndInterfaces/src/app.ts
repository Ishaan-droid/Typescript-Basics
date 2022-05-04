class Department {
  name: string;
  readonly id: string;
  private employees: string[];

  constructor(name: string, id: string, employees: string[] = []) {
    this.name = name;
    this.id = id;
    this.employees = employees;
  }

  printProps(this: Department) {
    console.log(`This is the ${this.name} department with id ${this.id}`);
  }

  addEmployee(empName: string) {
    this.employees.push(empName);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting', 'D1');
accounting.addEmployee('Ishaan');
accounting.addEmployee('Cheeka');

accounting.printProps();
accounting.printEmployeesInformation();
