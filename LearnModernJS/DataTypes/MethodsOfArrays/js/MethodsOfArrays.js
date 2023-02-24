`use strict`;

/* Добавление/удаление элементов массива */

// метод splice, возвращает, то что удалили

const fruits = [`Apple`, `Dog`, `Banana`, `Lemon`];

console.log(fruits.splice(1, 1)); // с элемента под индексом 1, удалили 1 элемент `Dog`

console.log(fruits);

fruits.splice(1, 0, `Grapes`, `Orange`); // с элемента под индексом 1, удалили 0 элементов, добавили еще 2

console.log(fruits);

fruits.splice(-1, 0, `Plum`); // работает с отрицательными значениями

console.log(fruits);

// метод slice, возвращает новый массив, работает с отрицательными индексами

console.log(fruits.slice(1, 4)); // от 1 индекса до 4 (не включая)

const fruits1 = fruits.slice(); // создает копию массива
console.log(fruits1);

// метод concat, возвращает новый массив c добавлением аргументов

console.log(fruits.concat(`Apricot`)); // также можно создать копию

const arrayLike = {
  0: `что-то еще`,
  [Symbol.isConcatSpreadable]: true, // создаем массивоподобный объект
  length: 1,
};

console.log(fruits.concat(arrayLike)); // если нет Symbol... ,добавляет в качестве элемента объект

/* Перебор: метод foEach */

fruits.forEach(console.log); // для каждого элемента выполняет функцию

fruits.forEach((item, index, array) => {
  console.log(`У ${item} индекс ${index} в ${array}`);
});

/* Поиск в массиве */

// метод indexOf, возвращает индекс найденного элемента, в противном случае -1
// метод lastIndexOf, осуществляет поиск с конца массива
console.log(fruits.indexOf(`Apple`)); // 0

// метод includes, возвращает true|false при наличии/отсутствии элемента в массиве
console.log(fruits.includes(`Dog`)); // false

// метод find, возвращает найденный  объект(элемент), в противном случае undefined

const users = [
  { id: 1, name: `Вася` },
  { id: 2, name: `Петя` },
  { id: 3, name: `Маша` },
];

const user = users.find((item) => item.id === 1); // нашел объект
console.log(user);
console.log(user.name); // Вася

// метод findIndex, аналогично find, возвращает индекс
// метод findLastIndex, ищет с конца массива

console.log(users.findIndex((item) => item.id === 1));

// метод find, ищет первый объект
// если в массиве может быть много объектов -  filter

console.log(users.filter((item) => item.id < 3)); // возвращает массив из 2 элементов

/* Преобразование массива */

// метод map, вызывает функцию для каждого элемента и возвращает новый массив

const words = [`Бильбао`, `Гэндальф`, `Назгул`];

console.log(words);
console.log(words.map((item) => item.length));

// метод sort, сортирует массив, изменяя его

const numbers = [1, 24, -2, 2, 15];

numbers.sort();
console.log(numbers); // по умолчанию элементы сортируются как строки

numbers.sort((a, b) => a - b);
console.log(numbers); // указали, что нужно сравнивать числа

const countries = [`Österreich`, `Andorra`, `Vietnam`];

countries.sort();
console.log(countries); // Andorra, Vietnam, Österreich (неправильно)

// для правильной сортировки строк используй метод localeCompare
countries.sort((a, b) => a.localeCompare(b));
console.log(countries); // Andorra,Österreich,Vietnam (правильно!)

// метод reverse, возвращает перевернутый массив

numbers.reverse();
console.log(numbers);

// метод split разбивает строку по заданному параметру и возвращает массив

const names = `Вася, Петя, Марина`;
const arrNames = names.split(`, `);
console.log(arrNames);

// метод join, соединяет массив в строку

const strNames = arrNames.join(`, `);
console.log(strNames);

// метод reduce, возвращает данные на основе всего массива
// reduceRight - аналогичен, только проходит по массиву справа налево
const sumNumbers = numbers.reduce((sum, item) => sum + item, 0); // получим сумму элементов
console.log(sumNumbers);

/* Проверка элемента на массив */

console.log(Array.isArray(sumNumbers)); // false - не массив
console.log(Array.isArray(numbers)); // true - массив

/* Задача № 1 */
function camelize(str) {
  return str
    .split(`-`)
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(``);
}

console.log(camelize(`background-color`));
console.log(camelize(`list-style-image`));
console.log(camelize(`-webkit-transition`));

/* Задача № 2 */

const arr = [5, 3, 8, 1, 2, 4, 1, -12, -2, -5];

function filterRange(array, a, b) {
  return arr.filter((number) => number >= a && number <= b);
}
const filtered = filterRange(arr, 1, 4);
console.log(filtered);

/* Задача № 3 */

function filterRangeInPlace(array, a, b) {
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i -= 1;
    }
  }
}

filterRangeInPlace(arr, 1, 4);
console.log(arr);

/* Задача № 4 */
const arr1 = [1, -2, 3, 1, -5, 1, -9];
arr1.sort((a, b) => b - a);
console.log(arr1);

/* Задача № 5 */

const word5 = [`JavaScript`, `HTML`, `CSS`];

function copySorted(array) {
  return word5.slice().sort((a, b) => a.localeCompare(b));
}

const sorted = copySorted(word5);
console.log(word5);
console.log(sorted);

/* Задача № 6 */
const calc = new Calculator();
const powerCalc = new Calculator();

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function (str) {
    const split = str.split(` `);
    const a = +split[0];
    const op = split[1];
    const b = +split[2];

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
powerCalc.addMethod(`*`, (a, b) => a * b);
powerCalc.addMethod(`/`, (a, b) => a / b);
powerCalc.addMethod(`**`, (a, b) => a ** b);

console.log(calc.calculate(`3 + 7`)); // 10
console.log(powerCalc.calculate(`2 ** 3`));

/* Задание № 7 */
const vasya = { name: `Вася`, surname: `Пупкин`, id: 1 };
const petya = { name: `Петя`, surname: `Иванов`, id: 2 };
const masha = { name: `Маша`, surname: `Петрова`, id: 3 };

const users7 = [vasya, petya, masha];

const names7 = users7.map((item) => item.name);

console.log(names7); // Вася, Петя, Маша

/* Задание № 8 */
const users8 = [vasya, petya, masha];
const usersMapped = users8.map((user8) => ({
  id: user8.id,
  fullName: `${user8.name} ${user8.surname}`,
}));

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

/* Задание № 9 */

function sortByAge(arr) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}

const vasya9 = { name: `Вася`, age: 25 };
const petya9 = { name: `Петя`, age: 30 };
const masha9 = { name: `Маша`, age: 28 };

const arr9 = [vasya9, petya9, masha9];

sortByAge(arr9);

// теперь отсортировано: [vasya, masha, petya]
console.log(arr9[0].name); // Вася
console.log(arr9[1].name); // Маша
console.log(arr9[2].name); // Петя

/* Задание № 10 */

const arr10 = [1, 3, 9];

function shuffle(array10) {
  // array10.sort(() => Math.random() - 0.5);
  for (let i = array10.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    // поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // подробнее о нём - в следующих главах
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array10[i], array10[j]] = [array10[j], array10[i]];
  }
}
shuffle(arr10);
console.log(arr10);

/* Задание № 11 */

const vasya11 = { name: `Вася`, age: 25 };
const petya11 = { name: `Петя`, age: 30 };
const masha11 = { name: `Маша`, age: 29 };

const arr11 = [vasya11, petya11, masha11];

function getAverageAge(arr11) {
  return (
    arr11.reduce((AverageAge, people) => AverageAge + people.age, 0) /
    arr11.length
  );
}
console.log(getAverageAge(arr11)); // (25 + 30 + 29) / 3 = 28

/* Задача № 12 */
function unique(arr12) {
  const result = [];
  arr12.forEach((item) => {
    if (!result.includes(item)) result.push(item);
  });
  return result;
}

const strings = [
  `кришна`,
  `кришна`,
  `харе`,
  `харе`,
  `харе`,
  `харе`,
  `кришна`,
  `кришна`,
  `:-O`,
];

console.log(unique(strings)); // кришна, харе, :-O

/* Задача № 13 */
const users13 = [
  { id: `john`, name: `John Smith`, age: 20 },
  { id: `ann`, name: `Ann Smith`, age: 24 },
  { id: `pete`, name: `Pete Peterson`, age: 31 },
];

function groupById() {
  return users13.reduce((user13, value) => {
    user13[value.id] = value;
    return user13;
  }, {});
}
const usersById = groupById(users);
console.log(usersById);
