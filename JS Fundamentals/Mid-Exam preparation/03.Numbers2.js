function numbers(sequence) {
  let arrOfNumbers = sequence.split(" ").map(Number);

  let sum = 0;

  for (let el of arrOfNumbers) {
    sum += el;
  }

  let average = sum / arrOfNumbers.length;

  arrOfNumbers = arrOfNumbers
    .filter((el) => el > average) // филтрира да е по-малко от average
    .sort((x, y) => y - x) // сортира по големина
    .slice(0, 5); // slice-ва в нов масив и дава 5 елементс

  return arrOfNumbers.length > 0 ? arrOfNumbers.join(" ") : "No"; // тернарен оператор
}
console.log(numbers("10 20 30 40 50"));
console.log(numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51"));
console.log(numbers("1"));
console.log(numbers("-1 -2 -3 -4 -5 -6"));
