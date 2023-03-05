`use strict`;

let john = { name: `Джон` };

console.log(john);

/* john = null;

console.log(john); // объект удален сборщиком мусора
 */
const array = [john];
const map = new Map();

map.set(john, `123`);
john = null;

console.log(map.keys()); // объект не удален поскольку хранится в Map-коллекции
console.log(array[0]); // объект не удален поскольку хранится в массиве

const weakMap = new WeakMap();

john = {};

weakMap.set(john, 321);
john = null;

console.log(weakMap); // john существует только как ключ и может быть удалён оттуда автоматически

const visitedSet = new WeakSet();

john = { name: `John` };
const pete = { name: `Pete` };
const mary = { name: `Mary` };

visitedSet.add(john); // John заходил к нам
visitedSet.add(pete); // потом Pete
visitedSet.add(john); // John снова

// visitedSet сейчас содержит двух пользователей

// проверим, заходил ли John?
console.log(visitedSet.has(john)); // true

// проверим, заходила ли Mary?
console.log(visitedSet.has(mary)); // false

john = null;

// структура данных visitedSet будет очищена автоматически (объект john будет удалён из visitedSet)

/* Задание № 1 */
const messages = [
  { text: `Hello`, from: `John` },
  { text: `How goes?`, from: `John` },
  { text: `See you soon`, from: `Alice` },
];
const readMessages = new WeakSet();

// Два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);

console.log(
  `Сообщение № 0 было прочитано? -  ${readMessages.has(messages[0])}`
);

messages.shift();
// теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)
