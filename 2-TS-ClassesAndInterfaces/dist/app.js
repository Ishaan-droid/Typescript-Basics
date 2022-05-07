"use strict";
let user1;
user1 = {
    name: 'Ishaan',
    age: 26,
    greet(phrase) {
        console.log(`${phrase} World.`);
    },
};
user1.greet('Hello');
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} me`);
    }
}
const user2 = new Human('Ishaan', 26);
console.log(user2);
