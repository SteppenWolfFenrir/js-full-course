'use strict';

/*
function calcAge(birthYear) {
  const age = 2026 - birthYear;

  function printAge() {
    let output = `${firstName}, you're ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Victor';
      output = 'NEW OUTPUT';

      const str = `Oh, you're a millennial, ${firstName}`;

      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Valentin';
calcAge(1996);*/

/*
console.log(me);
/!*console.log(job);
console.log(year);*!/

var me = 'Valentin';
/!*let job = 'developer';
const year = 2002;*!/


console.log(addDecl(1, 2));
console.log(addExpr(1, 2));
console.log(addArrow(1, 2));

function addDecl() {
  return a + b;
}

const addExpr = function(a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;*/

/*console.log(this);

const calcAgeExpr = function(birthYear) {
  console.log(2026 - birthYear);
  console.log(this);
};

calcAgeExpr(24);

const calcAgeArrow = birthYear => {
  console.log(2026 - birthYear);
  console.log(this);
};

calcAgeArrow(24);*/

/*
const valentin = {
  year: 2002,
  calcAge: function() {
    console.log(2026 - this.year);
  }
};

valentin.calcAge();

const anastasia = {
  year: 2003,
}

anastasia.calcAge = valentin.calcAge;

anastasia.calcAge();

const f = valentin.calcAge;
f();*/

/*const valentin = {
  firstName: 'Valentin',
  year: 2002,
  calcAge: function() {
    console.log(2026 - this.year);

    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1997);
    };
    isMillennial();
  },

  greet: () => console.log(`Hey, ${this.firstName}!`)
};

valentin.greet();
valentin.calcAge();*/

/*
const addExpr = function(a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(3, 5, 8, 11, 14);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
}

addArrow(5, 4, 8, 11, 14);*/

/*
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Valentin',
  age: 23
};

const friend = me;
friend.name = 'David';
friend.age = 22;

console.log('Me:', me);
console.log('Friend:', friend);*/

let lastName = 'Anashkin';
let oldLastName = lastName;
lastName = 'Bolschich';

console.log(lastName, oldLastName);

const anastasia = {
  firstName: 'Anastasia',
  lastName: 'Bolschich',
  age: 23
};

const marriedAnastasia = anastasia;
marriedAnastasia.lastName = 'Anashkina';
console.log('Before marriage:', anastasia);
console.log('After marriage:', marriedAnastasia);

const anastasia2 = {
  firstName: 'Anastasia',
  lastName: 'Bolschich',
  age: 23,
  family: ['Alice, Katya']
};

const anastasiaCopy = Object.assign({}, anastasia2);
anastasiaCopy.lastName = 'Anashkina';
console.log('Before marriage:', anastasia2);
console.log('After marriage:', anastasiaCopy);

anastasiaCopy.family.push('Mary');
anastasiaCopy.family.push('Lena');

console.log('Before marriage:', anastasia2);
console.log('After marriage:', anastasiaCopy);