"use strict";
class Department {
    constructor(name, id, employees = []) {
        this.name = name;
        this.id = id;
        this.employees = employees;
    }
    printProps() {
        console.log(`This is the ${this.name} department with id ${this.id}`);
    }
    addEmployee(empName) {
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
