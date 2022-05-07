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
class ITDepartment extends Department {
    constructor(name, id, admins = []) {
        super(name, id);
        this.admins = admins;
    }
}
const it = new ITDepartment('I1', 'IT', ['Max']);
it.addEmployee('Cheeka');
console.log(it);
class PagesDepartment extends Department {
    constructor(name, id, reports = []) {
        super(name, id);
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    getReports() {
        return console.log(`Here are your reports : ${this.reports}`);
    }
}
const page = new PagesDepartment('Page', 'P1');
page.addReport('Something went wrong');
page.getReports();
console.log(page);
