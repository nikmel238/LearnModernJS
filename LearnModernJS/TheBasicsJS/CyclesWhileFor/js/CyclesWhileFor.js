`use strict`;

/* Цикл while */

let i = 0;

while (i < 3) {
  console.log(i); // 0,1,2
  i++;
}

/* Цикл do ... while  */
// для того чтобы тело цикла выполнилось пока что один раз

do {
  console.log(i); // 3
  i++;
} while (i < 3);

/* Цикл for */

// задает начальные значения, проверяет условие, выполняет тело, делает шаг
for (i = 0; i < 3; i++) {
  console.log(i); // 0,1,2
}

/* Прерывание цикла break */

let sum = 0;

while (true) {
  const value = +prompt('Введите число', '');

  if (!value) break;

  sum += value;
}
alert(`Сумма введенных чисел ${sum}`);

/* Переход к следующей итерации continue */

for (i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i); // 1,3,5,7,9
}

/* Метки для break и continue */

outer: for (let a = 0; a < 3; a++) {
  for (let b = 0; b < 3; b++) {
    const input = prompt(`Координаты (${a},${b})`, '');
    if (!input) break outer; // если пустая строка или Отмена, то выйти из обоих циклов
  }
}
alert('Готово!');

/* Практика № 1 */

i = 3;

while (i) {
  console.log(i--); // 3,2,1
}

/* Практика № 2 */
i = 0;
while (++i < 5) console.log(i); // 1,2,3,4

i = 0;
while (i++ < 5) console.log(i); // 1,2,3,4,5

/* Практика № 3 */

for (i = 0; i < 5; i++) console.log(i); // 0,1,2,3,4
for (i = 0; i < 5; ++i) console.log(i); // 0,1,2,3,4

/* Практика № 4 */

for (i = 0; i <= 10; i++) {
  if (i == 0 || i % 2) continue;
  console.log(i);
}

/* Практика № 5 */

i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

/* Практика № 6 */

do {
  input = +prompt('Введите число больше 100', '');
} while (input < 100 && input);

if (!input) {
  alert('Ну и не надо');
} else {
  alert('ВЫ МОЛОДЕЦ!');
}

/* Практика № 7 */

alert('Нахождение простого числа в положительном интервале от a до b');
do {
  a = +prompt('Задайте начало интервала: a', '0');
} while (a !== 0 && (a <= 0 || !a));

do {
  b = +prompt('Задайте конец интервала: b', 'Должно быть больше a');
} while (b <= 0 || !b || a >= b);

for (a; a <= b; a++) {
  for (i = 2; i <= a; i++) {
    if (a != 1 && (a % i == 0)) {
      if (a != i) break;
      alert(`${a}`);
    }
  }
}

/* Практика № 8 (Конструкция switch ... case ... default) */
const browser = 'Chrome';
if (browser === 'Edge') {
  console.log('You\'ve got the Edge!');
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
  console.log('Okay, we support these browsers too');
} else {
  console.log('We hope that this page looks ok!');
}

/* Практика № 9 (Конструкция switch ... case ... default) */

i = +prompt('Введите число от 0 до 3', '');

switch (i) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 0');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2 или 3');
    break;

  default:
    alert('Ввели не то что надо');
}
