// DEFINING AN INTERFACE
interface Person {
  name: string;
  readonly age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Ishaan',
  age: 26,

  greet(phrase) {
    console.log(`${phrase} World.`);
  },
};

user1.greet('Hello');

// INHERITING INTERFACES IN CLASSES
interface Named {
  name: string;
  outputName?: string;

  printName?(outputName: string): void;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Human implements Greetable {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(phrase: string): void {
    console.log(`${phrase} me`);
  }
}

const user2 = new Human('Ishaan', 26);

console.log(user2);
