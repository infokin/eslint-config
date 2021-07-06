//@formatter:off

// No console (`no-console`)
console.log("No console!");

// No shadow variable (`no-shadow`)
const shadow = 5; // eslint-disable-line no-unused-vars
function method3() { // eslint-disable-line no-unused-vars
  const shadow = 3; // eslint-disable-line no-unused-vars
}

// No `var` (`no-var`)
var one = 1;

// Use const (`prefer-const`)
let var1 = 5;

// No whitespace before semicolon (`semi-spacing`)
method1(var1) ;

// Enforce whitespace after semicolon (`semi-spacing`)
const a = 1;const b = 2;
method1(a, b);

// No dangling comma (`comma-dangle`)
const list = [one, 2, 3,];
list.push(4);

// No unused methods (warning) (`no-unused-vars`)
function method2() {
  // No unused variables (warning) (`no-unused-vars`)
  const tmp = "unused";
}

// Ignore arguments with underscore (`argsIgnorePattern`)
function method1(_a1, _a2, _a3) {
  list.push(5);
}
method1();

// Use double quotes (`quotes`)
let quotes = "double";
quotes = 'single';
method1(quotes);

// Missing semicolon (`semi`)
const myVar = 5
method1(myVar)
