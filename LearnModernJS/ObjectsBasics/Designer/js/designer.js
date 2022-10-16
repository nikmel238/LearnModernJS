`use strict`;

function User(name) {
  this.name = name;
  this.isAdmin = false;
  this.sayHi = function () {
    alert(`Привет, меня зовут: ${this.name}`);
  };

  console.log(new.target);
}

const user = new User(`Victor`);

console.log(user.name);
user.sayHi();

/* Практика №2 */

function Calculator() {
  this.read = function read() {
    this.a = +prompt(`Введите число a`, 0);
    this.b = +prompt(`Введите число b`, 0);
  };
  this.sum = function sum() {
    return this.a + this.b;
  };
  this.mul = function mul() {
    return this.a * this.b;
  };
}
const calculator = new Calculator();

calculator.read();

alert(`Sum=${calculator.sum()}`);
alert(`Mul=${calculator.mul()}`);

/* Практика № 3 */

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function read() {
    this.value += +prompt(`Введите число`, 0);
  };
}

const accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
alert(`Итог: ${accumulator.value}.`);
