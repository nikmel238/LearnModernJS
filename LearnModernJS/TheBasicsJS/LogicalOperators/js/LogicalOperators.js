`use strict`;

/* Оператор || (ИЛИ) */
let time = 14;

if (time >= 18 || time <= 9) {
  console.log(`Офис закрыт.`);
} else {
  console.log(`Офис открыт`);
}
// Оператор или выводит первое истинное значение, если таковых нет то последнее
console.log(1 || 0);
console.log(undefined || 1);
console.log(null || 1 || undefined);
console.log(0 || null);

/* Оператор && (И) */

let userName = `Pol`;
let userPsw = `1234`;

if (userName == `Pol` && userPsw == `1234`) {
  console.log(`Welcome`);
} else {
  console.log(`Close`);
}
// Оператор находит первое ложное значение, если таковых нет то последнее
console.log(1 && 2);
console.log(null && 2 && undefined);
console.log(`Hello` && 0 && 23);

/* Оператор ! (НЕ) */

let phoneNumber = `1234`;

if (phoneNumber != `1234`) {
  console.log(`Неправильно набран номер`);
} else {
  console.log(`Ожидайте ответа`);
}

console.log(
  `Для приведения к логическому значению можно использовать !!phoneNumber вместо Boolean(phoneNumber): ${!!phoneNumber}.`
);

/* Оператор ?? (нулевого слияния) */

let height = null;

// оператор похож на ||, находит первое ОПРЕДЕЛЕННОЕ значение, если таковых нет выводит последнее (если все null/undefined)
console.log(height ?? `Рост не задан`);

/* Практика № 1 */
console.log(null || 2 || undefined);

/* Практика № 2 */
console.log(console.log(1) || 2 || console.log(3));

/* Практика № 3 */
console.log(1 && null && 2);

/* Практика № 4 */
console.log(console.log(2) && console.log(12));

/* Практика № 5 */
console.log(null || (2 && 3) || 4);

/* Практика № 6 и 7 */
let age = +prompt(`Введите цифру`, 0);
console.log(age);

if (age >= 14 && age <= 90) {
  alert(`Цифра находится в диапазоне от 14 до 90 включительно`);
} else if (!(age >= 14 && age <= 90)) {
  alert(`Цифра не находится в диапазоне от 14 до 90 включительно`);
} else {
  alert(`Неправильная цифра`);
}

/* Практика № 8 */
userName = prompt(`Введите логин`, ``);

if (userName === `Админ`) {
  userPsw = prompt(`Введите пароль`, ``);
  if (userPsw === `Я главный`) {
    alert(`Добро пожаловать!`);
  } else if (userPsw === `` || userPsw === null) {
    alert(`Отменено`);
  } else {
    alert(`Неверный пароль`);
  }
} else if (userName === `` || userName === null) {
  alert(`Отменено`);
} else {
  alert(`Я вас не знаю`);
}
