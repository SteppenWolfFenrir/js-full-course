const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let result = '';

  arr.forEach((element, index) => {
    result += `... ${element}ºC in days ${index + 1} ...`;
  })
  console.log(result)
};

printForecast(arr1);
printForecast(arr2);