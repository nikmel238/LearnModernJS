`use strict`;

/* Function Declaration (Объявление Функции) */

const age = +prompt('Сколько вам лет?', '');

function checkAge() {
  // объявляем функцию
  // if (age > 18) {   // используем глобальную переменную
  //   return alert (`Welcome`);
  // } else {
  //   return confirm (`А родители разрешили?`);
  // }

  return age > 18 ? alert('Welcome') : confirm('А родители разрешили?');

  // return (age > 18) || confirm (`А родители разрешили?`);
}

checkAge(); // вызываем функцию

/* Практика № 3 */

function min(a, b) {
  return a <= b ? a : b;
}

console.log(min(1, 2));
console.log(min(1, -2));
console.log(min(2, 2));

/* Практика № 4 */

let x;
let n;

do {
  x = +prompt('Введите число.', '0');
} while (x !== 0 && !x);

do {
  n = +prompt('В какую степень возвести число', 'Введите натуральное число.');
} while (!n || n < 0 || n % 1 != 0);

function pow() {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

alert(pow(x, n));

/* Function Expression (Функциональное Выражение) */

const func = function () {
  console.log('Парам');
};

func();

console.log(func);

/* Функции кол-беки */

// function declaration
/* function ask(question, yes, no) {
  if (confirm(question)) {
    yes ();
  } else no ();
}

function showOK() {
  alert (`Вы согласны`);
}

function showNO() {
  alert(`Вы не согласны`);
}

ask (`Согласны?`, showOK, showNO); */

// function expression

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes ();
//   } else no ();
// }

// ask (`Согласны?`,
//   function () {alert(`Вы согласны`);},
//   function () {alert(`Вы не согласны`);}
// );

/* Стрелочные функции */
// для коротких функций и кол-бек функций

const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  'Согласны?',
  () => alert('Вы согласны'),
  () => alert('Вы не согласны')
);
