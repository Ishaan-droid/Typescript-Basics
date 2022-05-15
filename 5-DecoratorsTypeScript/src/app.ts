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
