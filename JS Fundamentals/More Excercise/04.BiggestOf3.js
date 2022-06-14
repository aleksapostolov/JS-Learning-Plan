function biggestOfThree(num1, num2, num3) {
  let biggestNumber = 0;
  if (num1 > num2 && num1 > num3) {
    biggestNumber = num1;
  } else if (num2 > num1 && num2 > num3) {
    biggestNumber = num2;
  } else {
    biggestNumber = num3;
  }
  console.log(biggestNumber);
}
biggestOfThree(-2, 7, 3);
biggestOfThree(130, 5, 99);
biggestOfThree(43, 43.2, 43.1);
biggestOfThree(2, 2, 2);
