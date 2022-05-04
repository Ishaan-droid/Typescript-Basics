const union: string | number = 'I can be either string or number';

let literalType: 'number-1' | 'number-2' = 'number-1';

console.log(literalType);

type customType = number | string;

// Function types

function add(number1: number, number2: number): number {
  return number1 + number2;
}

// This is a function type
let displayAdd: (a: number, b: number) => number;

displayAdd = add;

console.log(displayAdd(2, 3));

// unknown type
let userInput: unknown;
