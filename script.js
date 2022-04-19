
// VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers. 
let x = 9;
let y = 6;
let z = x - y;
console.log(`The difference between ${x} and ${y} is ${z}`);


// EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.        
var name1 = 'Larry';
var name2 = 'Doofenshmirtz';
console.log(`The name ${name2} is longer than ${name1} by ${name2.length - name1.length} characters`);


// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
let tone = prompt("Say something");
if (tone === tone.toUpperCase()) {
    console.log('Person is shouting')
} else if (tone === tone.toLowerCase()) {
    console.log('Person is whispering')
} else {
    console.log('Person is speaking normally')
};

// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.
function add(number1, number2) {
    return number1 + number2
};
function subtract(number1, number2) {
    return number1 - number2
};
function multiply(number1, number2) {
    return number1 * number2
};
function divide(number1, number2) {
    return number1 / number2
};

// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. 
let number1 = parseFloat(prompt('Enter first number'))
let operator = prompt('Enter an operator (+ - * /)')
let number2 = parseFloat(prompt('Enter second number'))
//parseFloat turn string input into numerical value

let result;
if (operator === '+') {
    result = number1 + number2;
    alert(`${number1} ${operator} ${number2} = ${result}`);
} else if (operator === '-') {
    result = number1 - number2;
    alert(`${number1} ${operator} ${number2} = ${result}`);
} else if (operator === '*') {
    result = number1 * number2;
    alert(`${number1} ${operator} ${number2} = ${result}`);
} else {
    result = number1 - number2;
    alert(`${number1} ${operator} ${number2} = ${result}`);
};

console.log(`${number1} ${operator} ${number2} = ${result}`);
