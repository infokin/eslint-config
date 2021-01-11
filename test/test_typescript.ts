// No console ('no-console')
console.log('No console!');

// No dangling comma (`@typescript-eslint/comma-dangle`)
const list = [one, 2, 3,];
list.push(4);

// No unused variables (`@typescript-eslint/no-unused-vars`)
const tmp = 'unused';

// No unused methods (`@typescript-eslint/no-unused-vars`)
function method2() {
}

// Ignore arguments with underscore (`argsIgnorePattern`)
function method1(_a1?, _a2?) {
}

method1();

// Use single quotes (`@typescript-eslint/quotes`)
let quotes = "double";
quotes = 'single';
method1(quotes);

// TODO: using `var` should lead to an error
var one = 1;

// TODO: no semicolon should lead to an error
let myVar = 5
method1(myVar);

// TODO: no typedef should lead to an error
const myString = 'Some string!';
method1(myString);

// TODO: no return value for methods should lead to an error
function method3() {
}
method3();
