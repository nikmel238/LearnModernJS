`use strict`;

const user = {
  name: `John`,
  age: 30,
};

user.sayHi = function () {
  alert(`${this.name},  Привет!`); // в методах используется this вместо названия самого объекта
};

user.sayHi(); // Привет!

/* ПРактика № 2 */

const calculator = {
  a: 0,
  b: 0,

  read() {
    this.a = +prompt(`Введите первое число.`, 0);
    this.b = +prompt(`Введите второе число.`, 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/* Практика № 3 */
const ladder = {
  step: 0,
  up() {
    this.step += this.step;
    return this;
  },
  down() {
    this.step -= this.step;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder
  .up()
  .up()
  .down()
  .showStep() // показывает 1
  .down()
  .showStep(); // затем 0
