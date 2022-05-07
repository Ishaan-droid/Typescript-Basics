class Department {
  name: string;
  readonly id: string;
  // private employees: string[];
  protected employees: string[];

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

class ITDepartment extends Department {
  admins: string[];

  constructor(name: string, id: string, admins: string[] = []) {
    super(name, id);
    this.admins = admins;
  }
}

const it = new ITDepartment('I1', 'IT', ['Max']);
it.addEmployee('Cheeka');

console.log(it);

class PagesDepartment extends Department {
  private reports: string[];

  constructor(name: string, id: string, reports: string[] = []) {
    super(name, id);
    this.reports = reports;
  }

  addReport(text: string) {
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
