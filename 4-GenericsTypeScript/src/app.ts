const names: Array<string> = [];
const x = 3;

const promise = new Promise((resolve, reject) => {
  if (x === 3) {
    resolve('Got the data');
  } else {
    reject('Error');
  }
});

promise.then(res => console.log(res)).catch(err => console.log(err));
