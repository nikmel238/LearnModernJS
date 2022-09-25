'use strict'

let FirstDataTypes = 123.23;
console.log (`Тип данных: число (number) - ${FirstDataTypes}. Число может иметь значение бесконечность ${FirstDataTypes/0},${FirstDataTypes/-0} и математическую ошибку ${FirstDataTypes/"строка"}`);
let SecondDataTypes = 12321342141234123412341234123412345123521351253124512351235123541324n;
console.log (`Также ингода необходимо использовать большие числа. Тип данных: BigInt - ${SecondDataTypes}. Для этого в конце числа ставь  -  n`);

let ThirdDataTypes = `Т Е К С Т`;
console.log (`Тип данных: строка (string) - ${ThirdDataTypes}. Для ее использования можно использовать различного рода кавычки`);

let FourthDataTypes = 4 > 1;
console.log (`Тип данных: логический (boolean) тип - ${FourthDataTypes}. Принимает значение false и tru.`);

let FifthDataTypes = null;
console.log (`Тип данных: ноль (Null) - ${FifthDataTypes}. Обозначает, что переменной ничего не задано, ноль, пусто.`);

let SixthDataTypes;
console.log (`Тип данных: undefined - ${SixthDataTypes}. То еть переменной не было назначено значение.`);

let SeventhDataTypes = Object ();
console.log (`Тип данных: объект (object). Продолжение следует ...`);

let EighthDataTypes = Symbol ();
console.log (`Тип данных: символ (symbol). Продолжение следует ...`);

console.log (`Для определения типа данных существует оператор typeof (). Вот все наши 8 типов данных`);
console.log (typeof (FirstDataTypes));
console.log (typeof (SecondDataTypes));
console.log (typeof (ThirdDataTypes));
console.log (typeof (FourthDataTypes));
console.log (`${typeof (FifthDataTypes)}. Для NULL - выводит значение object. Это ошибка JS.`);
console.log (typeof (SixthDataTypes));
console.log (typeof (SeventhDataTypes));
console.log (typeof (EighthDataTypes));

/* Практика № 1 */

let nameUser = `Ilya`;

alert (`hello ${1}`);         // hello 1
alert (`hello ${"nameUser"}`);    // hello nameUser
alert (`hello ${nameUser}`);  // hello Ilya