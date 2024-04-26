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
      `Order received!!! ${this.starterMenu[firstOrderIndex]} and ${this.mainMenu[secondOrderIndex]} will be delivered to ${address} at ${time}`
    );

    return foodOrdered;
  },
};

restaurant.orderDelivery({
  firstOrderIndex: 1,
  secondOrderIndex: 1,
  address: '10 Bode Ogungbade Street',
  time: '2:00 PM',
});

let [, second, , fourth] = restaurant.categories;
console.log(second, fourth);

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
console.log({ morning }, { night });
