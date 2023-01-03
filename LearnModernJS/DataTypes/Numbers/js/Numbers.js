`use strict`;

// запись *10^3 === e3
console.log(1000000 === 1e6);
console.log(0.0001 === 1e-4);
console.log(5e3);

// различные системы исчисления
const a = 255; // десятичная
const b = 0b11111111; // двоичная
const c = 0o377; // восьмеричная
const d = 0xff; // шестнадцатеричная
console.log(a === b);
console.log(a === c);
console.log(a === d);
console.log(b === c);
console.log(b === d);

// метод, возвращающий строку (число) в заданной системе исчисления (от 2 до 36)
console.log(a.toString(2));
console.log(b.toString(10));
console.log((111232123).toString(16));

// округление
console.log(Math.floor(5.3)); // в меньшую сторону
console.log(Math.ceil(5.3)); // в большую сторону
console.log(Math.round(-5.3)); // до ближайшего целого числа
console.log(Math.trunc(5.3)); // убирает дробную составляющую
console.log((123.1232123).toFixed(4)); // строка, округляет до заданных (n) знаков после запятой

// неточные вычисления
console.log(3e500);
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);
console.log(+(0.1 + 0.2).toFixed(1) === 0.3);

// проверка на математическую ошибку NaN (функция)
console.log(isNaN(NaN));
console.log(NaN === NaN);
console.log(isNaN(5 + 1));
console.log(isNaN(`${5}1s`));

// проверка на +- Infinity/NaN (функция)
console.log(isFinite(Infinity));
console.log(isFinite(123));
console.log(isFinite(`str`));

// проверка на число и на математическую ошибку NaN (метод)
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(`123`));
console.log(Number.isNaN(`str`));
console.log(Number.isNaN(123));

// проверка на число и на +- Infinity/NaN (метод)
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(123));
console.log(Number.isFinite(`123`));

// строгое сравнение для двух определенных ситуаций
console.log(Object.is(NaN, NaN));
console.log(Object.is(-0, 0));

// преобразование строки к числу (функция)
console.log(parseInt(`100.12px`, 10)); // до первой точки, второй аргумент не обязательный (система исчисления)
console.log(parseFloat(`100.12px`)); // до первой буквы

// встроенный объект Math

console.log(Math.random());
console.log(Math.max(3, 12, -2, 123, -123, 0));
console.log(Math.min(3, 12, -2, 123, -123, 0));

// задание №1
const number1 = +prompt(`Введите число a.`, 0);
const number2 = +prompt(`Введите число b.`, 0);
alert(`Сумма: ${number1 + number2}.`);

// задание №3

function readNumber() {
  let result = prompt(`Задание №3 \nВведите число!`, 0);
  while (!isFinite(result)) {
    result = prompt(`Задание №3 \nОшибка! \nВведите число!`, 0);
  }
  return result === null || result === `` ? result : +result;
}

alert(`Вы ввели: ${readNumber()}`);

// задание № 5
function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

// задание № 6
function randomInteger(min, max) {
  return min + Math.random() * (max + 1 - min);
}

console.log(Math.floor(randomInteger(1, 5)));
console.log(Math.floor(randomInteger(1, 5)));
console.log(Math.floor(randomInteger(1, 5)));
