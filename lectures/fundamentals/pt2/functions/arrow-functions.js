/*

1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'

*/

const russiaPopulation = 146;
const usaPopulation = 335;
const germanyPopulation = 85;

const percentageOfWorld3 = (population) => Math.round((population / 7900) * 100);

console.log(`${percentageOfWorld3(russiaPopulation)}%`);
console.log(`${percentageOfWorld3(usaPopulation)}%`);
console.log(`${percentageOfWorld3(germanyPopulation)}%`);

// =>>> functions-calling-other-functions.js