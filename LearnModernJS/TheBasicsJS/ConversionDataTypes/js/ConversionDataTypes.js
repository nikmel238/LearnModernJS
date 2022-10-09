/* Строковое преобразование */
let value1 = true;
let value2 = String(value1);
console.log(
  `Используя String () - Преобразовали Из ${typeof value1} в ${typeof value2}.`,
);

/* Математическое преобразование */

value1 = '6';
value2 = Number(value1);
console.log(
  `Используя Number () - Преобразовали Из ${typeof value1} в ${typeof value2}.`,
);
console.log(
  `Так же математическое преобразование происходит, когда имеется математическое выражение: например строку делим на строку или число ${
    value1 / 2
  } (${typeof (value1 / 2)})`,
);
console.log(
  `Если строка не может быть явно приведена к числу, то результатом преобразования будет NaN: ${Number(
    'Не число',
  )}`,
);
console.log(`Number (undefined): ${Number(undefined)}`);
console.log(`Number (true): ${Number(true)}`);
console.log(`Number (false): ${Number(false)}`);
console.log(`Number (null): ${Number(null)}`);
console.log(
  `Number (string). Если число - то число. При пустой строке - 0. Иное - Nan.: ${Number(
    '  ',
  )}`,
);

/* Логическое преобразование */

value1 = 5;
value2 = Boolean(value1);
console.log(
  `Используя Boolean () - Преобразовали Из ${typeof value1} в ${typeof value2}.`,
);
console.log(
  'Если переменная пустая, 0, null, undefined, NaN, false - то это false. В противном случае - true.',
);
