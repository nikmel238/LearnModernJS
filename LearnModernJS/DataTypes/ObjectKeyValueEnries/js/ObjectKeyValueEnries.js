`use strict`;

const user = {
  name: `Павел`,
  age: 25,
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

const doublePrices = Object.fromEntries(
  // преобразовать в массив, затем map, затем fromEntries обратно объект
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices.meat); // 8

/* Задача № 1 */

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(obj) {
  let sumMoney = 0;

  for (const money of Object.values(obj)) {
    sumMoney += money;
  }

  return sumMoney;
}

console.log(sumSalaries(salaries));

/* Задача № 2 */

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(salaries));
