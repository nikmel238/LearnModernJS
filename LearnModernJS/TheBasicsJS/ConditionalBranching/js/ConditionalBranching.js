// Конструкция if ... else if ... else
const calc = +prompt('5 + 5 = ?', '');

if (calc === 10) {
  alert('Ты гений!');
} else if (calc > 10) {
  alert('Это много. Учи математику!');
} else if (calc < 10) {
  alert('Это мало. Учи математику!');
} else {
  alert('Нужно было писать арабской цифрой!!!');
}

// Аналогично, только с условным оператором ?
const year = +prompt('Сколько тебе лет?', '');

year < 5
  ? alert('Привет, малыш!')
  : year < 18
  ? alert('Привет!')
  : year < 100
  ? alert('Здравствуйте')
  : alert('Какой странный возраст');

/* Практика № 2 */

const nameJS = prompt('Какое официальное название JS?', 'ECMAScript');

if (nameJS === 'ECMAScript') {
  alert('Верно');
} else {
  alert('Не знаете? ECMAScript!');
}

/* Практика № 3 */

const value = +prompt('Введите любое число', '43');

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else if (value === 0) {
  alert(0);
} else {
  alert('Надо было вводить цифру!');
}

/* Практика № 4 */

const result = value + year < 4 ? 'Мало' : 'Много';
