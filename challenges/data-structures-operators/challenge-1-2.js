/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
  1. 2. 3. 4. 5. 6. 7. Create one player array for each team (variables 'players1' and
'players2')
The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
  goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
Create an array 'allPlayers' containing all players of both teams (22
players)
During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
  number of goals that were scored in total (number of player names passed in)
The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
  operator.
    Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' an
*/

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
  Your tasks:
  1. 2. 3. 4. Loop over the game.scored array and print each player name to the console,
  along with the goal number (Example: "Goal 1: Lewandowski")
Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
  Gnarby: 1,
    Hummels: 1,
  Lewandowski: 2
}
GOOD LUCK 😀
*/


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski'
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze'
    ]
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  },
  printGoals: function(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
    console.log(args.length);
  }
};

const [players1, players2] = [...game.players];
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const [...players1Final] = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = { ...game.odds };
console.log(team1, draw, team2);

game.printGoals(...game.scored);

console.log(team2 > team1 && 'Bayern Munich');

const playerEntries = Object.entries(game.scored);
console.log(playerEntries);
for (const [key, value] of playerEntries) {
  console.log(`Goal ${Number(key) + 1}: ${value}`);
}

const oddEntries = Object.values(game.odds);
let sum = 0;
for (const value of oddEntries) {
  sum += value;
}
sum = sum / oddEntries.length;
console.log(sum);

for (const [key, value] of Object.entries(game.odds)) {
  if (key === 'team1') {
    console.log(`Odd of victory ${game.team1}: ${value}`);
  } else if (key === 'team2') {
    console.log(`Odd of victory ${game.team2}: ${value}`);
  } else if (key === 'x') {
    console.log(`Odd of draw: ${value}`)
  }
}


const scorers = {}

for (const player of game.scored) {
  if (!scorers[player]) {
    scorers[player] = 1;
  } else {
    scorers[player] += 1;
  }
}
console.log(scorers);