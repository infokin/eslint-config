//@formatter:off

// No console ('no-console')
console.log('No console!');

// No `var` (`no-var`)
var one = 1;

// Use const (`prefer-const`)
let var1 = 5;

// No whitespace before semicolon (`semi-spacing`)
method1(var1) ;

// Enforce whitespace after semicolon (`semi-spacing`)
const a = 1;const b = 2;
method1(a, b);

// No dangling comma (`@typescript-eslint/comma-dangle`)
const list = [one, 2, 3,];
list.push(4);

// No unused methods (warning) (`@typescript-eslint/no-unused-vars`)
function method2() {
    // No unused variables (warning) (`@typescript-eslint/no-unused-vars`)
    const tmp = 'unused';
}

// Ignore arguments with underscore (`argsIgnorePattern`)
function method1(_a1, _a2, _a3) {
    list.push(5);
}
method1();

// Use single quotes (`@typescript-eslint/quotes`)
let quotes = "double";
quotes = 'single';
method1(quotes);

// Missing semicolon (`@typescript-eslint/semi`)
const myVar = 5
method1(myVar)
