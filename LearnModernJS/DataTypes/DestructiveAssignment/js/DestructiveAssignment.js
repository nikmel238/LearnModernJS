`use strict`;
const arr = [`Julius`, `Caesar`, `Consul`, `of the Roman Republic`];

const [firstName, , title] = arr;

console.log(firstName);
// console.log(surname);
console.log(title); // Consul

const [a, b, c] = `abc`;

console.log(a);

const [one, two, three] = new Set([1, 2, 3]);
console.log(two);

const user = {
  name: `John`,
  age: 30,
};

// цикл по ключам и значениям
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); // name:John, затем age:30
}

const [name1, name2, ...rest] = [
  `Julius`,
  `Caesar`,
  `Consul`,
  `of the Roman Republic`,
];

// rest это массив элементов, начиная с 3-го
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

const options = {
  titleOptions: `Menu`,
  width: 100,
};

const { titleOptions, width: w, height: h = 200 } = options;

console.log(titleOptions); // Menu
console.log(w); // 100
console.log(h); // 200

const options1 = {
  title1: `My menu`,
  items: [`Item1`, `Item2`],
};

function showMenu({
  title1 = `Untitled`,
  width1: w1 = 100, // width присваиваем в w
  height1: h1 = 200, // height присваиваем в h
  items: [item1, item2], // первый элемент items присваивается в item1, второй в item2
}) {
  console.log(`${title1} ${w1} ${h1}`); // My Menu 100 200
  console.log(item1); // Item1
  console.log(item2); // Item2
}

showMenu(options1);

/* Задача № 1 */
const user1 = {
  name11: `John`,
  years1: 30,
};

const { name11, years1: age, isAdmin = false } = user1;

console.log(name1); // John
console.log(age); // 30
console.log(isAdmin); // false

/* Задача № 2 */
const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}

console.log(topSalary(salaries));
