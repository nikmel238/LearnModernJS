`use strict`;

/* Всегда когда мы используем переменную для объекта - это ссылка */
const user = {
  name: `Phil`,
  age: 22,
};

const cloneUser = user;

cloneUser.age = 18;

console.log(user.age);
console.log(cloneUser.name);

/* Копирование объекта Object.assign(куда, копируемы объект1, 2...) */

const copeUser = { ...user };
