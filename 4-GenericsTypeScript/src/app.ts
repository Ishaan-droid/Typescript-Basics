const names: Array<string> = []; // string[]
const x = 3;

const promise: Promise<string> = new Promise((resolve, reject) => {
  if (x === 3) {
    resolve('Got the data');
  } else {
    reject('Error');
  }
});

promise.then(res => console.log(res)).catch(err => console.log(err));

const arr: Array<string | number> = ['m', 'x', 23];

// Generics with type constraints

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  const obj3 = { ...obj1, ...obj2 };
  return obj3;
}

const merged = merge({ name: 'Ishaan' }, { age: 26 });

console.log(merged.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  const descriptionText = 'Got no value';

  if (element.length === 1) console.log(`Got only 1 element.`);
  else if (element.length > 1) console.log(`Got ${element.length} elements`);

  return [element, descriptionText];
}

const count = countAndDescribe(['No', 'Yes']);
console.log(count);
