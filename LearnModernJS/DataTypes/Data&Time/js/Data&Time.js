`use strict`;

const nowTime = new Date(0);
console.log(nowTime);

const data0 = new Date(`2022, 11, 12`);
console.log(data0);

const data1 = new Date(2022, 0, 12, 6, 23, 6, 563);
console.log(data1);

console.log(data1.getFullYear());
console.log(data1.getMonth());
console.log(data1.getDate());
console.log(data1.getHours());
console.log(data1.getMinutes());
console.log(data1.getMilliseconds());
console.log(data1.getDay());
// все показывает в местном времени
// для просмотра в Лондонском времени добавляй UTC
console.log(data1.getHours());
console.log(data1.getUTCHours());

console.log(data1.getTime()); // возвращает таймстамп
console.log(data1.getTimezoneOffset()); // разница в минутах между UTC и местным часовым поясом

data1.setFullYear(2010);
console.log(data1);
data1.setMonth(5);
console.log(data1);
data1.setDate(8);
console.log(data1);
data1.setHours(21);
console.log(data1);
data1.setMinutes(32);
console.log(data1);
data1.setMilliseconds(222);
console.log(data1);

const data2 = new Date();
data2.setDate(data2.getDate() + 4);

console.log(data2);

console.log(+data2);

const start1 = new Date(); // начинаем отсчёт времени

// выполняем некоторые действия
for (let i = 0; i < 100000; i += 1) {
  const doSomething = i * i * i;
}

const end1 = new Date(); // заканчиваем отсчёт времени

console.log(`Цикл отработал за ${end1 - start1} миллисекунд`);

const start2 = Date.now(); // количество миллисекунд с 1 января 1970 года

// выполняем некоторые действия
for (let i = 0; i < 100000; i += 1) {
  const doSomething = i * i * i;
}

const end2 = Date.now(); // заканчиваем отсчёт времени

console.log(`Цикл отработал за ${end2 - start2} миллисекунд`); // вычитаются числа, а не даты

const ms = Date.parse(`2012-01-26T13:51:50.417-07:00`);
console.log(ms); // 1327611110417 (таймстамп)

/* Задача №1 */
const date1 = new Date(2012, 1, 20, 3, 12);
console.log(date1);

/* Задача № 2 */
const date2 = new Date(2012, 0, 3); // 3 января 2012 года
function getWeekDay(date) {
  const day = [`ВС`, `ПН`, `ВТ`, `СР`, `ЧТ`, `ПТ`, `СБ`];
  return day[date.getDay()];
}
console.log(getWeekDay(date2));

/* Задача № 3 */
const date3 = new Date(2012, 0, 3); // 3 января 2012 года
function getLocalDay(date) {
  const day = date.getDay();
  return day === 0 ? 7 : day;
}
console.log(getLocalDay(date2));

/* Задача № 4 */
const date4 = new Date(2015, 0, 2);

function getDateAgo(date, day) {
  const oldDay = new Date(date);
  return oldDay.getDate(oldDay.setDate(date.getDate() - day));
}

console.log(getDateAgo(date4, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date4, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date4, 365)); // 2, (2 Jan 2014)

/* Задача № 5 */
function getLastDayOfMonth(year, month) {
  const date = new Date(year, (month += 1), 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

/* Задача № 6 */
function getSecondsToday() {
  const now = new Date();

  // создаём объект с текущими днём/месяцем/годом
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const diff = now - today; // разница в миллисекундах
  return Math.round(diff / 1000); // получаем секунды
}

console.log(getSecondsToday());

/* Задача № 7  */
function getSecondsTomorrow() {
  const now = new Date();

  // создаём объект с текущими днём/месяцем/годом
  const tomorowDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );

  const diff = tomorowDay - now; // разница в миллисекундах
  return Math.round(diff / 1000); // получаем секунды
}

console.log(getSecondsTomorrow());

/* Задача № 8 */
function formatDate(date) {
  const diff = new Date() - date; // разница в миллисекундах

  if (diff < 1000) {
    // меньше 1 секунды
    return `прямо сейчас`;
  }

  const sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

  if (sec < 60) {
    return `${sec} сек. назад`;
  }

  const min = Math.floor(diff / 60000); // преобразовать разницу в минуты
  if (min < 60) {
    return `${min} мин. назад`;
  }

  // отформатировать дату
  // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
  let d = date;
  d = [
    `0${d.getDate()}`,
    `0${d.getMonth() + 1}`,
    `${d.getFullYear()}`,
    `0${d.getHours()}`,
    `0${d.getMinutes()}`,
  ].map((component) => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

  // соединить компоненты в дату
  return `${d.slice(0, 3).join(`.`)} ${d.slice(3).join(`:`)}`;
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
