function processOddNUmbers(array) {
  let filteredElements = array.filter((el, i) => i % 2 == 1);
  let doubledNumbers = filteredElements.map((x) => x * 2);
  let reversedNumbers = doubledNumbers.reverse();

  console.log(reversedNumbers.join(" "));
}
processOddNUmbers([10, 15, 20, 25]);
processOddNUmbers([3, 0, 10, 4, 7, 3]);

// functional programming - can't debbug though!!!

function processOddNUmbers(array) {
  array = array
    .filter((el, i) => i % 2 == 1)
    .map((x) => x * 2)
    .reverse()
    .join(" ");

  console.log(array);
}
processOddNUmbers([10, 15, 20, 25]);
processOddNUmbers([3, 0, 10, 4, 7, 3]);
