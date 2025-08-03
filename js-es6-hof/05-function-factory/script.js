// 1. makeMultiplier(factor): returns a function that multiplies by the factor
const makeMultiplier = factor => number => number * factor;

// Example usage
const double = makeMultiplier(2);
console.log(double(5)); // 10

const triple = makeMultiplier(3);
console.log(triple(4)); // 12

// 2. makeGreeter(greeting): returns a function that greets with the provided greeting
const makeGreeter = greeting => name => `${greeting}, ${name}!`;

// Example usage
const sayHi = makeGreeter("Hi");
console.log(sayHi("Mia")); // "Hi, Mia!"

const sayHello = makeGreeter("Hello");
console.log(sayHello("Liam")); // "Hello, Liam!"
