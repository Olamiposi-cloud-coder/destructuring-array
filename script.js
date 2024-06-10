'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderFood: function (firstOrderIndex, secondOrderIndex) {
    const order = [
      this.starterMenu[firstOrderIndex],
      this.mainMenu[secondOrderIndex],
    ];
    return order;
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with: ${ing1}, ${ing2}, ${ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  foodAvailable: {
    mondays: {
      morning: 'Fried Rice',
      afternoon: 'Chicken and chips',
      night: 'poundo Yam',
    },

    tuesdays: {
      morning: 'Jollof Rice',
      afternoon: 'Salad',
      night: 'Amala',
    },

    wednesdays: {
      morning: 'Yam and egg',
      afternoon: 'Beans and Plantain',
      night: 'White Rice and stew',
    },

    thursdays: {
      morning: 'Toast Bread and tea',
      afternoon: 'Poundo Yam',
      night: 'Fruit',
    },
  },

  orderDelivery: function ({
    firstOrderIndex,
    secondOrderIndex,
    address,
    time,
  }) {
    const foodOrdered = this.orderFood(firstOrderIndex, secondOrderIndex);
    console.log(`Food ordered: ${foodOrdered.join(', and ')}`);

    const orderAddress = address;
    console.log(`Delivery Address: ${orderAddress}`);

    const deliveryTime = time;
    console.log(`Delivery Time: ${deliveryTime}`);

    console.log(
      `Order received!!! ${foodOrdered.join(
        ', and '
      )} will be delivered to ${address} at ${time}`
    );

    return foodOrdered;
  },
};

restaurant.orderDelivery({
  firstOrderIndex: 1,
  secondOrderIndex: 1,
  address: 'No 10 Bode Ogungbade Street',
  time: '2:00 PM',
});

let [, second, , fourth] = restaurant.categories;
console.log(second, fourth);

let [, , third, , fifth] = restaurant.starterMenu;
console.log(third, fifth);

[third, fifth] = [fifth, third];
console.log(third, fifth);

// Switching Variables
[fourth, second] = [second, fourth];
console.log(second, fourth);

// Receiving 2 return values from a function call

let [mainOrder, secondOrder] = restaurant.orderFood(2, 0);
console.log(mainOrder, secondOrder);
[secondOrder, mainOrder] = [mainOrder, secondOrder];
console.log(mainOrder, secondOrder);

// Little exercise

const nested = [2, 5, [1, 3]];
let [first, , array] = nested;
console.log(first, array);

// Default values
const [p = 1, q = 1, r = 1] = [10, 8];
console.log(p, q, r);

// Destructuring Objects
const { name, openingHours, mainMenu } = restaurant;
console.log(name, openingHours, mainMenu);

// Default Values
const {
  name: restaurantName = [],
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Mutating Variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

console.log(a, b);

// Nested Objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  thursdays: { morning, night },
} = restaurant.foodAvailable;
console.log(morning, night);

// Spread Operators
const arr = [7, 10, 20];
arr.unshift(1, 3, 4);
console.log(arr);

const newArray = [5, 6, ...arr];
newArray.sort(function (a, b) {
  return a - b;
});
console.log(newArray);

// Rest Parameters
function sum(...args) {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}

console.log(sum(2, 4, 6, 8));

const newG = [1, 2, 3, 4, 5];
const newSpread = [8, 9, 10, ...newG];
newSpread.sort(function (a, b) {
  return a - b;
});
console.log(newSpread);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const ingredients = [
  // prompt("Let's make pasta! ingredient 1?"),
  // prompt('ingredient 2?'),
  // prompt('ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

// the Spread Operator

const [d, f, ...others] = [1, 2, 4, 7, 9, 20];
console.log(d, f, others);

// Rest parameter

function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}

add(1, 2, 5, 7, 8);

const x = [23, 5, 10];
add(...x);

// short circuiting
console.log(3 || 'idris');

function showResult(marks) {
  const result = marks || 'Not present';
  console.log(`Mark ${result}`);
}

showResult(5);
showResult(0);

console.log([] && 3);
console.log(3 && []);
console.log([] || 3);
console.log(3 || []);

restaurant.numGuests;
const guessCorrect = restaurant.numGuests ?? 10;
console.log(guessCorrect);

// First challenge

const game = {
  team1: 'Real Madrid',
  team2: 'Manchester City',
  players: [
    [
      'Martinez',
      'Rudiger',
      'Militao',
      'Toni kroos',
      'Mendy',
      'Camavinga',
      'Joselu',
      'Vini jr',
      'Bellingham',
      'Modric',
      'Rodrigo',
    ],
    [
      'Ederson',
      'Akanji',
      'Walker',
      'Grelish',
      'Ake',
      'Stone',
      'Foden',
      'De Bruyne',
      'Rodrigo',
      'Halland',
      'Benardo',
    ],
  ],
  score: '4:0',
  scored: ['Vini jr', 'Rodrigo', 'Joselu', 'Modric'],
  date: 'May 23rd, 2024',
  odds: {
    team1: 2.2,
    X: 3.3,
    team2: 2.5,
  },
};

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

const [gk, ...fieldPlayers] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk);
console.log(fieldPlayers);
console.log(gk2);
console.log(fieldPlayers2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {
  odds: { team1, X: draw, team2 },
} = game;

console.log(team1, draw, team2);

function printGoals(...nameOfPlayer) {
  const scoredPlayers = nameOfPlayer.filter(player =>
    game.scored.includes(player)
  );
  console.log(`${scoredPlayers.length} goals were scored!`);
  console.log('Players who scored goals:');
  scoredPlayers.forEach(player => {
    console.log(player);
  });
}

printGoals('Joselu', 'Modric', 'Vini jr', 'Ronaldo');

team1 > team2 || console.log('Team 1 is more likely to win');
team1 < team2 || console.log('Team 1 is more likely to win');

console.log(players1);

const menuu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuu);

for (const item of menuu) console.log(item);
for (const item of menuu.entries()) console.log(item);
for (let i = 0; i < menuu.length; i++) {
  console.log(`${i + 1}: ${menuu[i]}`);
}

// using destructuring for the loop
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

const learningHours = {
  mon: {
    starts: '10am',
    ends: '2pm',
  },

  tue: {
    starts: '12pm',
    ends: '4pm',
  },
};

const aboutMe = {
  name: 'Idris Olayinka Musa',
  gender: 'Male',
  stateOfOrigin: 'Kwara',
  graduate: true,
  everHadSex: true,

  calcAge: function (birthYear) {
    return 2024 - birthYear;
  },

  learningHours,
};

console.log(aboutMe.learningHours);
console.log(aboutMe.calcAge(2000));

// Testing a function
function fibonacci(n) {
  // Base case
  if (n === 0 || n === 1) {
    return n;
  }
  // Recursive case
  else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(3));

// Looping Objects
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We open ${properties.length} days in a week: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

for (const [key, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Sets Data Structures

const ordersSet = new Set([...restaurant.mainMenu, ...restaurant.starterMenu]);
console.log(ordersSet);

console.log(ordersSet.size);
console.log(ordersSet.has('Pasta'));
console.log(ordersSet.add('pasta'));
console.log(ordersSet);
console.log(ordersSet.delete('pasta'));
console.log(ordersSet);

// Map Data structure

const rest = new Map();
rest
  .set('name', 'Cloud Codes')
  .set('categories', ['Pizza', 'Bucket Chicken'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'Yes, we are open :D')
  .set(false, 'No, we are closed :(');

console.log(rest.get('name'));
console.log(`${rest.get('name')} has ${rest.get('categories')} available.`);

const time = 20;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

// Getting the same result with Ternary Operator

const isOpenOrClose = time > rest.get('open') && time < rest.get('close');
console.log(isOpenOrClose);
console.log(rest.get(isOpenOrClose ? true : false));

const staffs = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

console.log(...staffs);

for (const staff of staffs) {
  console.log(staff);
}

staffs.forEach(stafff => {
  console.log(stafff);
});

staffs.forEach((staf, index) => {
  console.log(`${index}: ${staf}`);
});

const uniqueStaffs = [...new Set(staffs)];
console.log(uniqueStaffs);

console.log(new Set(staffs).size);
const lastName = 'cloud';
console.log([...lastName].length);
console.log(new Set(lastName).size);

// Map Iteration

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'JavaScript'],
  [2, 'Java'],
  [3, 'C'],
  ['correct', 1],
  [true, 'Correct 👌'],
  [false, 'Try again'],
]);

console.log(question);

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 1;

const checkAnswer = answer === question.get('correct');
console.log(question.get(checkAnswer ? true : false));

console.log(question.get(answer === question.get('correct')));

// Converting a map back to an array

const newAr = [...question];
console.log(newAr);
console.log(...question.keys());
console.log(...question.values());

function showName() {
  this.name = 'Cloud';
  this.showName = () => {
    console.log(this.name);
  };
  this.times = function (n) {
    for (let i = 0; i < n; i++) {
      this.showName();
    }
  };
}

const result = new showName();
result.times(5);

// Coding challenge #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// #1
const eventsArray = [...gameEvents.values()];
const events = new Set(eventsArray);
console.log(eventsArray);
console.log(events);

// #2
gameEvents.delete(64);
console.log(gameEvents);

// #3
console.log(`An event happened, on average, every ${90 / gameEvents.size}`);

// second way
const totalEvents = gameEvents.size;
const averageTime = 90 / totalEvents;

console.log(
  `An event happened, on average, every ${Math.round(averageTime)} minutes`
);

//
