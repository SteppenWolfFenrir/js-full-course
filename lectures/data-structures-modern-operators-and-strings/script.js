'use strict';

// Data needed for a later exercise
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12, close: 23
  }, [weekdays[4]]: {
    open: 11, close: 23
  }, [weekdays[5]]: {
    open: 0, close: 24
  }
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12, close: 22
    }, fri: {
      open: 11, close: 23
    }, sat: {
      open: 0, // Open 24 hours
      close: 24
    }
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
                  starterIndex = 1, mainIndex = 0, time = '20:00', address
                }) {
    console.log(`Order received: "${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}" will be delivered to ${address} at ${time}.`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

/// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
  console.log(openStr);
}

/// Property VALUES
const values = Object.values(openingHours);
console.log(values);

/// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we are open at ${open} and close at ${close}`);
}

/// Optional Chaining
/*console.log(restaurant.openingHours.thu?.open);
console.log(restaurant.openingHours?.thu?.open);*/

/*const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  const close = restaurant.openingHours[day]?.close;
  console.log(`On day ${day}, we open at ${open}`);
}

/// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

/// Arrays
const users = [{
  name: 'Valentin', email: 'valentin.io'
}];

console.log(users[0]?.name ?? 'User does not exist');*/

/*const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);*/

/*const rest1 = {
  name: 'Capri',
  numGuests: 0
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1.numGuests);
console.log(rest2.numGuests);*/

/*restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);*/

/// Nullish: null and undefined (NOT 0 or '')
/*const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);*/

/// Use ANY data type, return ANY data type, short-circuiting
/*console.log('--- OR ---');
console.log(3 || 'Valentin');
console.log('' || 'Valentin');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);*/

/*console.log('--- AND ---')
console.log(0 && 'Valentin');
console.log(8 && 'Valentin');

console.log('Hello' && 23 && null && 'Valentin');*/

/// Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

/*console.log(restaurant.orderSoup && restaurant.orderSoup('mushrooms', 'spinach'));
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');*/

/*restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');*/

/// SPREAD, because on RIGHT side of =
/*const arr = [1, 2, ...[3, 4]];
console.log(arr);*/


/// REST, because on LEFT side of =
/*const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log([a, b, ...others]);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);*/

/// Objects
/*const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);*/

/// Functions
/*const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);*/

/// Spread Operator

/*!*const ingredients = [prompt('Let\'s make pasta! Ingredient 1 ?'),
  prompt('Ingredient 2 ?'),
  prompt('Ingredient 3 ?')];*!/

/!*restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);*!/

/// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const newRestaurantCopy = {...newRestaurant};
newRestaurantCopy.name = 'Ristorante Roma';
console.log(newRestaurantCopy);*/

/*const arr = [7, 8, 9];

const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

const newGoodArr = [1, 2, ...arr];
console.log(newGoodArr);

console.log(...newGoodArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
console.log(restaurant.mainMenu);*/

/// Copy array

/*cost mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);*/

// Join 2 arrays or more
/*const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);*/

// Iterables: Arrays, Strings, Maps, Sets. NOT Objects
/*const str = 'Valentin';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);*/
// console.log(`${...str}, Anashkin`);


// restaurant.orderDelivery({
//   time: '22:30', address: 'Via del Sole, 21', mainIndex: 2, starterIndex: 2
// });
//
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21', starterIndex: 1
// });

/// Destructing Objects

/*const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName, openingHours: hours, categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);*/

/// Mutating variables

/*let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(obj);
({ a, b } = obj);
console.log(a, b);*/

/// Nested object

/*const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);*/

/// Destructing Arrays

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

/!*
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
*!/

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [6, 8]];

// const [i, , j] = nested;
// console.log([i, j]);

const [i, , [j, k]] = nested;
console.log([i, j, k]);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/