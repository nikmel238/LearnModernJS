`use strict`;

const id = Symbol(`id`);

const user = {
  [id]: 1,
  name: `Вася`,
};

console.log(id.toString());
console.log(id.description);

alert(user[id]); // мы можем получить доступ к данным по ключу-символу

/* Глобальные Symbol */
const ageman = Symbol.for(`age`);
const agewoman = Symbol.for(`age`);

console.log(ageman === agewoman);
console.log(Symbol.keyFor(ageman)); // выводит имя глобального Symbol
