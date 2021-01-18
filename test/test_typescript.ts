//@formatter:off

// No console ('no-console')
console.log('No console!');

// No `var` (`no-var`)
var one: number = 1;

// Use const (`prefer-const`)
let var1: number = 5;

// No whitespace before semicolon (`semi-spacing`)
method1(var1) ;

// Enforce whitespace after semicolon (`semi-spacing`)
const a: number = 1;const b: number = 2;
method1(a, b);

// No dangling comma (`@typescript-eslint/comma-dangle`)
const list: number[] = [one, 2, 3,];
list.push(4);

// No unused methods (`@typescript-eslint/no-unused-vars`)
function method2(): void {
    // No unused variables (`@typescript-eslint/no-unused-vars`)
    const tmp: string = 'unused';
}

// Ignore arguments with underscore (`argsIgnorePattern`)
function method1(_a1?: unknown, _a2?: unknown, _a3?: unknown): void {
    list.push(5);
}
method1();

// No useless constructors (`@typescript-eslint/no-useless-constructor`)
class A {
    constructor() { }
}
const classA: A = new A();
method1(classA);

// Use single quotes (`@typescript-eslint/quotes`)
let quotes: string = "double";
quotes = 'single';
method1(quotes);

// Missing semicolon (`@typescript-eslint/semi`)
const myVar: number = 5
method1(myVar)

// Needs return type (`@typescript-eslint/explicit-function-return-type`)
function method3() {
    list.push(6);
}
method3();

// Needs accessors (`@typescript-eslint/explicit-member-accessibility`)
class Goat {
    name: string | undefined;
    sound: unknown;
}
const goat: Goat = new Goat();
goat.name = 'Bert';
goat.sound = 'BLÖÖÖK';

// Variable needs type definition (`@typescript-eslint/typedef`)
const str = 'Hello World!';
method1(str);

// Properties need type definition (`@typescript-eslint/typedef`)
interface Human {
    name;
    age;
}

// Member variables need type definition (`@typescript-eslint/typedef`)
class User implements Human {
    public name;
    public age;
    public height;
}
const user: User = new User();
user.name = 'Klaus';
user.age = 50;
user.height = 180;
