/*

1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?

 */

const populations = [10.5, 146, 335, 85];

function percentageOfWorld1(populations) {
  return Math.round((populations / 7900) * 100);

}

const percentages1 = populations.map(percentageOfWorld1);

const percentages2 = []
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

let percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages1)
console.log(percentages2);
console.log(percentages3);