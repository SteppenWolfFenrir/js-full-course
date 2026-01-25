/*

LECTURE: Strings and Template Literals

1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax

 */

let population = 146;

const continent = 'South Europe';
const isIsland = false;
const language = 'Russian';
const country = 'Russia';

// let populationRussia = 146;
// let newPopulation = (populationRussia / 2);
// newPopulation++
// console.log(newPopulation);

// let populationFinland = 6;
// console.log(populationRussia > populationFinland);
//
// let averagePopulation = 33;
// console.log(populationRussia < averagePopulation);

let description = `Russia is in ${continent}, and its ${population} million people speak ${language}`
console.log(description);

// =>>> if-else.js