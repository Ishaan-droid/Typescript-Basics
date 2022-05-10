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
