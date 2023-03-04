`use strict`;

// создадим Map-коллекцию

const map = new Map();

// зададим свойства нашей Map-коллекции
// ключ может быть любым типом данных в отличии от обычных объектов
map.set(1, `num`);
map.set(`1`, `str`);
map.set(true, `bool`);

console.log(map);

// просмотрим значения, некоторых свойств Map-коллекции

console.log(map.get(1));
console.log(map.get(`1`));

// с помощью метода has можно проверить имеется ли данный ключ в Map-коллекции

console.log(map.has(true));
console.log(map.has(false));

// удаляем одно из свойств по ключу

map.delete(`1`);
console.log(map);

// проверяем на размер Map-коллекции

console.log(map.size);

// очищаем коллекцию от всех элементов

map.clear();
console.log(map);

// также в качестве ключа можно использовать объекты
let user = {
  name: `Иван`,
  age: 20,
};

map.set(user, true);

console.log(map);
console.log(map.get(user));

// так же мы можем одной итерацией добавлять ключ-значение

map.set(`1`, `str1`).set(1, `num1`).set(true, `bool1`);
console.log(map);

map.clear();

// или при объявлении Map-коллекции
const map1 = new Map([
  [`1`, `str`],
  [1, `num`],
  [true, `bool`],
]);

// перебор коллекции
// в формате [ключ, значение]
for (const keyValue of map1) {
  console.log(keyValue);
}

// перебор по ключам
for (const key of map1.keys()) {
  console.log(key);
}

// перебор по значениям
for (const value of map1.values()) {
  console.log(value);
}

// или можем задать сами
map1.forEach((value, key, map1) =>
  console.log(`Под ключом ${key} хранится значение ${value} в  ${map1}`)
);

// можно создать Map-коллекцию из объекта
console.log(user);

user = new Map(Object.entries(user));

console.log(user);

// и обратно в объект
user = Object.fromEntries(user);
console.log(user);

/* Set-коллекция */

const set = new Set(); // создаем Set-коллекцию

set.add(`value`); // добавляем значение
console.log(set);

set.add(`value`); // если добавить повторяющееся значение - ничего не произойдет
console.log(set);

console.log(set.has(`value`)); // проверяем имеется ли в коллекции значение;

set.delete(`value`); // удаляет значение
console.log(set);

const names = [`Иван`, `Петр`, `Дима`];

const setNames = new Set(names); // можно создавать Set, передавая ему итерируемый объект
console.log(setNames);

console.log(setNames.size); // возвращает количество значений в коллекции

setNames.clear(); // очищает коллекцию
console.log(setNames);

// 1 способ перебора коллекции
set.add(names);

for (const name of set) console.log(name);

// 2 способ перебора коллекции
set.forEach((name) => console.log(name));

for (const name of set.values()) console.log(name);
for (const name of set.keys()) console.log(name);

/* Задание № 1 */
function unique(arr) {
  return Array.from(new Set(arr));
}

const values = [
  `Hare`,
  `Krishna`,
  `Hare`,
  `Krishna`,
  `Krishna`,
  `Krishna`,
  `Hare`,
  `Hare`,
  `:-O`,
];

console.log(unique(values)); // Hare,Krishna,:-O

/* Задача № 2 */
const arr = [`nap`, `teachers`, `cheaters`, `PAN`, `ear`, `era`, `hectares`];
function aclean(arr) {
  const word = new Map();

  for (const itemArr of arr) {
    word.set(
      itemArr
        .toLowerCase()
        .split(``)
        .sort((a, b) => a.localeCompare(b))
        .join(``),
      itemArr
    );
  }

  return Array.from(word.values());
}
console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
/* Задача № 3 */
const map3 = new Map();

map.set(`name`, `John`);

const keys = Array.from(map.keys());

keys.push(`more`);
console.log(keys);
