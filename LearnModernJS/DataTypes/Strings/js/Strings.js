`use strict`;

function sum(a, b) {
  return a + b;
}

console.log(`Сумма: ${sum(2, 4)}`);

const guestList = `Guests:
 * \tJohn
 * Pete
 * Mary`;

console.log(guestList);

// перевод строки добавлен с помощью символа перевода строки
const str1 = `Hello\nWorld`;

// многострочная строка, созданная с использованием обратных кавычек
const str2 = `Hello
World`;

alert(str1 == str2); // true

// свойство определения длины строки
console.log(`Hello`.length);

// доступ к символу в строке
console.log(str1[0]);

// или с помощью метода
console.log(str1.at(-1)); //  возвращает последний символ

// перебор символов
for (const char of `Hello`) {
  console.log(char);
}

// методы изменения регистра
console.log(`qwerty`.toUpperCase());
console.log(`qwerty`[2].toUpperCase());
console.log(`AQWE`.toLowerCase());
console.log(`AQWE`[2].toLowerCase());

// поиск подстрок(символом) с помощью методов, возвращает позицию первого символа
const str = `Widget with id`;

console.log(str.indexOf(`Widget`)); // 0, потому что подстрока 'Widget' найдена в начале
console.log(str.indexOf(`widget`)); // -1, совпадений нет, поиск чувствителен к регистру
console.log(str.indexOf(`id`)); // 1, подстрока "id" найдена на позиции 1 (..idget with id)
console.log(str.lastIndexOf(`id`)); // начинает поиск с конца

// цикл для поиска всех подстрок в строке
const str3 = `Ослик Иа-Иа посмотрел на виадук`;

const target = `Иа`; // цель поиска

let pos = 0;
while (true) {
  const foundPos = str3.indexOf(target, pos);
  if (foundPos === -1) break;

  console.log(`Найдено тут: ${foundPos}`);
  pos = foundPos + 1; // продолжаем со следующей позиции
}

// метод, проверяющий наличие подстроки в строке
console.log(str.includes(` id`));
console.log(str.includes(`Hello`));
// метод, проверяющий начинается или заканчивается строка с определенной подстроки
console.log(str.startsWith(`Wid`));
console.log(str.endsWith(`id`));

// получение подстроки
console.log(str.slice(7, 11)); // поддерживает отрицательные значения, начинает отчет с конца
console.log(str.substring(11, 7)); // позволяет менять аргументы местами, не поддерживает отриц знач
console.log(str.substr(7, 4)); // указывается длина подстроки

// проверка символа на вес
console.log(`A`.codePointAt());
console.log(`a`.codePointAt());
// поиск символа по весу
console.log(String.fromCodePoint(90));

// сравнение строк
console.log(`Österreich`.localeCompare(`Zealand`)); // -1
console.log(`Zealand`.localeCompare(`Österreich`)); // 1
console.log(`Zealand`.localeCompare(`Zealand`)); // 0

/* Задание №1 */
function ucFirst(pop) {
  if (!pop) return pop;
  return pop[0].toUpperCase() + pop.slice(1);
}
console.log(ucFirst(`koK`));

/* Задание №2 */
function checkSpam(inf) {
  const infLower = inf.toLowerCase();

  return infLower.includes(`viagra`) || infLower.includes(`xxx`);
}

console.log(checkSpam(`Viagra join`));
console.log(checkSpam(`Via join`));

/* Задание №3 */

function truncate(str4, maxlength) {
  return str4.length > maxlength ? `${str4.slice(0, maxlength - 1)}…` : str4;
}

console.log(truncate(`С Новым Годом!`, 6));
console.log(truncate(`С Новым Годом!`, 20));

/* Задание №4 */
function extractCurrencyValue(str5) {
  return +str5.slice(1);
}
console.log(extractCurrencyValue(`$12`));
