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

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

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
