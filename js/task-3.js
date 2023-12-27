// ЦИКЛ - FOR
// function filterArray(numbers, value) {
//   let newArray = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// ЦИКЛ - FOR...OF
function filterArray(numbers, value) {
  let filteredArray = [];

  for (let number of numbers) {
    if (number > value) {
      filteredArray.push(number);
    }
  }

  return filteredArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
