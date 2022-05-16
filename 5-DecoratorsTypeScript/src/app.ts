// DECORATORS
function Logger(logstring: string) {
  return function (constructor: Function) {
    console.log(logstring);
    console.log(constructor);
  };
}

function withTemplate(template: string, hook: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hook)! as HTMLDivElement;
    hookEl.innerHTML = `<h1>${template}</h1>`;
  };
}

// MULTIPLE DECORATORS CALLING
@Logger('Logging...')
@withTemplate('My Person Object', 'app')
class Person {
  name = 'Ishaan';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

// PROPERTY DECORATORS
function Log(target: any, propertyName: string | symbol) {
  console.log('Property Decorator');
  console.log(target);
  console.log(propertyName);
}

class Product {
  @Log
  title: string;
  price: number;

  constructor(t: string, price: number) {
    this.title = t;
    this.price = price;
  }

  getPriceWithTax(tax: number) {
    return this.price * tax + this.price;
  }
}

const rubber = new Product('Rubber', 50);

const button = document.querySelector('button')! as HTMLButtonElement;

class Printer {
  message: string = 'This works';

  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

button.addEventListener('click', p.showMessage.bind(p));
