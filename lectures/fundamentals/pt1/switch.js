/*

LECTURE: The switch Statement

1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'

 */

let language = 'russian';

switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place in number of native speakers');
    break;
  case 'hindi':
    console.log('4th place in number of native speakers');
    break;
  case 'arabic':
    console.log('5th place in number of native speakers');
    break;
  default:
    console.log('Great language too!');
}