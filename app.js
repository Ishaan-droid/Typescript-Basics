var union = 'I can be either string or number';
var literalType = 'number-1';
console.log(literalType);
// Function types
function add(number1, number2) {
    return number1 + number2;
}
// This is a function type
var displayAdd;
displayAdd = add;
console.log(displayAdd(2, 3));
