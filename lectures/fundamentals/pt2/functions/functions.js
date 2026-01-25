/*

1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console

*/

function describeCountry(country, population, capitalCity) {
  return(`${country} has ${population} million people and its capital is ${capitalCity}`);
}

const russia = describeCountry('Russia', 146, 'Moscow');
const usa = describeCountry('USA', 335, 'Washington');
const germany = describeCountry('Germany', 85, 'Berlin');

console.log(russia);
console.log(usa);
console.log(germany);

// =>>> function-declarations-vs-expressions.js