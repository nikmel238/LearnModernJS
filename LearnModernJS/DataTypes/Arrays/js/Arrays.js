`use strict`;

/* Создание массива */
const arr0 = new Array();
const arr1 = [`blue`, `yellow`, `black`];

console.log(arr1[1]);

arr1[1] = `red`;
console.log(arr1[1]);
arr1[3] = `green`;
console.log(arr1[3]);

// свойство, определяющее длину массива

console.log(arr1.length);
console.log(arr1);

// свойство, позволяющее работать с отрицательными индексами
console.log(arr1.at(-1));

/* Добавление (можно несколько)/удаление концов массива */
//работа с концом массива
console.log(arr1.push(`home`)); //добавление, возвращает новую длину массива
console.log(arr1.pop()); //удаление, возвращает удаленный элемент
//работа с началом массива
console.log(arr1.unshift(`car`)); //добавление, возвращает новую длину массива
console.log(arr1.shift()); //удаление, возвращает удаленный элемент

/* Перебор элементов */
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

for (arr of arr1) {
  console.log(arr);
}

/* Создание многомерных массивов */
const matrix = [
  [1, 4, 10],
  [2, 11, 42],
  [23, 5, 7],
];

console.log(matrix[2][1]);

/* Перевод значений массива в строку */
console.log(String(matrix));

/* Задание №1 */
let fruits = ['Яблоки', 'Груша', 'Апельсин'];

let shoppingCart = fruits;
shoppingCart.push('Банан');

console.log(fruits.length);

/* Задание №2 */
let styles = [`Джаз`, `Блюз`];
styles.push(`Рок-н-Ролл`);
styles[2] = `Классика`;
styles.shift();
styles.unshift(`Рэп`, `Регги`);
console.log(styles);

/* Задание № 3 */
let arr3 = ['a', 'b'];

arr3.push(function () {
  alert(this);
});

arr3[2]();

/* Задание №4 */
function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt('Введите число', 0);

    // Прекращаем ввод?
    if (value === '' || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(`Сумма введенных чисел: ${sumInput()}`);
/* Задание №5 */

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0