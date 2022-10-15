`use strict`;
/* global */
const user = {
  name: `Nikita`,
  age: 18,
  'like birds': true,
};

user.isAdmin = true;

delete user[`like birds`];

const key = prompt(`Что вы хотите узнать о клиенте`, `name`);

alert(user[key]);

const fruit = (`Введите свойство`, `apple`);

const bag = {
  [fruit]: 5,
};

alert(bag.apple);

function makeUser(name, age) {
  return {
    name,
    Age: age,
  };
}

const userR = makeUser(`Victor`, 18);

alert(userR.name);

alert(`name` in userR);

for (const prop in userR) {
  alert(key);
  alert(userR[key]);
}

/* Практика №1 */

const praktika1 = {};

praktika1.name = `Victor`;

praktika1.surname = `Smith`;

praktika1.name = `Nikita`;

delete praktika1.name;

/* Практика № 2 */

const schedule = {};

function isEmpty(obj) {
  for (const pop in obj) {
    return false;
  }
  return true;
}

alert(isEmpty(schedule)); // true

schedule[`8:30`] = `get up`;

alert(isEmpty(schedule)); // false

/* Практика № 4 */

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (const money in salaries) {
  sum += salaries[money];
}

alert(sum);

/* Практика № 5 */
const menu = {
  width: 200,
  height: 300,
  title: `My menu`,
};

function multiplyNumeric(obj) {
  for (const popo in obj) {
    if (typeof obj[popo] === `number`) {
      obj[popo] *= 2;
    }
  }
}

multiplyNumeric(menu);
