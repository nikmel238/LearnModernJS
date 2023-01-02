`use strict`;

function User(name, age) {
  this.name = name;
  this.age = age;

  this[Symbol.toPrimitive] = function (hint) {
    alert(`hint: ${hint}`);
    return hint === `string` ? this.name : this.age;
  };
}

const Alex = new User(`Alex`, 20);
const Max = new User(`Max`, 30);

alert(String(Alex) + String(Max));
