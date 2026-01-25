/*

1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice

*/

const russia = 'Russia';
const usa = 'USA';
const germany = 'Germany';

const russiaPopulation = 146;
const usaPopulation = 335;
const germanyPopulation = 85;

function percentageOfWorld1(population) {
  return Math.round((population / 7900) * 100);
}

const describePopulation = (country, population) =>
  `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;

console.log(describePopulation(russia, russiaPopulation));
console.log(describePopulation(usa, usaPopulation));
console.log(describePopulation(germany, germanyPopulation));