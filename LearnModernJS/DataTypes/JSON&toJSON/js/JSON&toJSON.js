`use strict`;

const student = {
  name: `Никита`,
  age: 24,
  isAdmin: false,
  course: [`HTML`, `CSS`, `JS`],
  wife: null,
};

const json = JSON.stringify(student); // преобразовали объект в строку

console.log(json);

const room = {
  number: 23,
};

const meetup = {
  title: `Conference`,
  participants: [{ name: `John` }, { name: `Alice` }],
  place: room, // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

console.log(JSON.stringify(meetup, [`title`, `participants`])); // отправили только свойства title и participants

console.log(
  JSON.stringify(meetup, [`title`, `participants`, `place`, `name`, `number`])
); // отправили только свойства title и participants, place...

console.log(
  JSON.stringify(meetup, (key, value) => {
    console.log(`${key}: ${value}`);
    return key === `occupiedBy` ? undefined : value;
  })
);

console.log(
  JSON.stringify(
    meetup,
    (key, value) => (key === `occupiedBy` ? undefined : value),
    1
  )
);

const room1 = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

const meetup1 = {
  title: `Conference`,
  room1,
};

console.log(JSON.stringify(room1)); // 23

console.log(JSON.stringify(meetup1));

let numbers = `[0, 1, 2, 3]`;

numbers = JSON.parse(numbers);

console.log(numbers[1]); // 1

let user = `{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }`;

user = JSON.parse(user);

console.log(user);

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, (key, value) => {
  if (key === `date`) return new Date(value);
  return value;
});

console.log(schedule.meetups[1].date.getDate()); // 18

/* Задача № 1 */
const user1 = {
  name: `Василий Иванович`,
  age: 35,
};

const JSON1 = JSON.parse(JSON.stringify(user1));

/* Задача № 2 */
const room2 = {
  number: 23,
};

const meetup2 = {
  title: `Совещание`,
  occupiedBy: [{ name: `Иванов` }, { name: `Петров` }],
  place: room2,
};

// цикличные ссылки
room2.occupiedBy = meetup2;
meetup2.self = meetup2;

console.log(
  JSON.stringify(meetup2, (key, value) =>
    key != `` && value == meetup2 ? undefined : value
  )
);
