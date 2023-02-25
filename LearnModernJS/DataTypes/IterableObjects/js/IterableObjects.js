`use strict`;

// // создадим объект, не являющийся итерируемым (цикл for (... of ...) не запустится)
// const range = {
//   from: 1,
//   to: 5,
// };

// // для итерируемого объекта необходимо добавить метод Symbol.iterator с методом next()

// range[Symbol.iterator] = function () {
//   // добавим сам объект итератора
//   // теперь цикл for (... of ...) будет работать с этим объектом
//   return {
//     current: this.from,
//     last: this.to,

//     // метод next() работает на каждой итерации цикла
//     // метод next() имеет вид {done: Boolean, value: any},
//     // где done=true означает, что цикл завершён,
//     // в противном случае value содержит очередное значение.
//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       }
//       return { done: true };
//     },
//   };
// };

// или можно создать в самом объекте range метод next()
const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    }
    return { done: true };
  },
};

for (const key of range) {
  console.log(key);
}

// итерация строк
const str = `Привет😂`;

for (const char of str) {
  console.log(char);
}

// итерация в ручную с помощью Symbol.iteration()
const iterator = str[Symbol.iterator]();
while (true) {
  const char = iterator.next();
  if (char.done) break;
  console.log(char.value);
}

// создадим псевдомассив. Объект с индексами и свойством length. Это неитерируемый объект
const arrayLike = {
  0: `Hello`,
  1: `Goodbye`,
  length: 2,
};

// Это не массив, поэтому мы не может использовать методы и свойства массивов
// Метод Array.from(name) превращает итерируемый объект или псевдомассивы в массивы

const arr1 = Array.from(arrayLike);
arr1.push(`Monday`);
console.log(arr1);

const arr2 = Array.from(str);
console.log(arr2);
