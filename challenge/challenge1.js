// // 'use strict';

// const scorers = {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2,
// };

// const gameCont = {
//   team1: 'Real Madrid',
//   team2: 'Manchester City',
//   players: [
//     [
//       'Martinez',
//       'Rudiger',
//       'Militao',
//       'Toni kroos',
//       'Mendy',
//       'Camavinga',
//       'Joselu',
//       'Vini jr',
//       'Bellingham',
//       'Modric',
//       'Rodrigo',
//     ],
//     [
//       'Ederson',
//       'Akanji',
//       'Walker',
//       'Grelish',
//       'Ake',
//       'Stone',
//       'Foden',
//       'De Bruyne',
//       'Rodrigo',
//       'Halland',
//       'Benardo',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Vini jr', 'Rodrigo', 'Joselu', 'Modric'],
//   scorers,
//   date: 'May 23rd, 2024',
//   odds: {
//     team1: 2.2,
//     X: 3.3,
//     team2: 2.5,
//   },
// };

// const [playersOne, playersTwo] = game.players;
// console.log(playersOne);
// console.log(playersTwo);

// const [golk, ...fieldPlayersOne] = playersOne;
// const [golk2, ...fieldPlayersTwo] = playersTwo;
// console.log(golk);
// console.log(fieldPlayersOne);
// console.log(golk2);
// console.log(fieldPlayersTwo);

// const alPlayers = [...playersOne, ...playersTwo];
// console.log(alPlayers);

// const playersOneFinal = [...playersOne, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersOneFinal);

// const {
//   odds: { teamOne, X: drawx, teamTwo },
// } = game;

// console.log(teamOne, drawx, teamTwo);

// function printGoals(...nameOfPlayer) {
//   const scoredPlayers = nameOfPlayer.filter(player =>
//     game.scored.includes(player)
//   );
//   console.log(`${scoredPlayers.length} goals were scored!`);
//   console.log('Players who scored goals:');
//   scoredPlayers.forEach(player => {
//     console.log(player);
//   });
// }

// printGoals('Joselu', 'Modric', 'Vini jr', 'Ronaldo');

// team1 > team2 || console.log('Team 1 is more likely to win');
// team1 < team2 || console.log('Team 1 is more likely to win');

// console.log(playersOne);

// console.log(game.scored);

// // Challenge One
// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${el}`);
// }

// for (const [player, goals] of Object.entries(scorers)) {
//   console.log(`Goal By ${player}: ${goals}`);
// }
// // Challenge Two

// const oddsValues = Object.values(game.odds);
// console.log(oddsValues);

// let summ = 0;
// for (const value of oddsValues) {
//   summ += value;
// }

// console.log(oddsValues);
// const average = Math.floor(summ / oddsValues.length);
// console.log(`The average odd is ${average}`);

// // Challenge Three
// const { teamone, X: drawX, teamtwo } = gameCont.odds;
// const { team1: team1Name, team2: team2Name } = gameCont;
// console.log(team1Name, drawX, team2Name);

// const oddLists = [
//   { team: `Victory ${team1Name}`, odd: team1 },
//   { team: 'draw', odd: drawX },
//   { team: `Victory ${team2Name}`, odd: team2 },
// ];

// for (const { team, odd } of oddLists) {
//   console.log(`Odd of ${team}: ${odd}`);
// }

// // Bonus
