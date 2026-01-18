/*

Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉

*/

let markWeight = 78;
let johnWeight = 92;

let markHeight = 1.69;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;
// console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}

// Another conditions

markWeight = 95;
johnWeight = 85;

markHeight = 1.88;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;
// console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}