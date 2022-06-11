function specialNumber(num) {
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let tempNum = i;
    while (tempNum > 0) {
      sum += tempNum % 10;
      tempNum = Math.floor(tempNum / 10);
    }
    let isSpecial = 0;
    if (sum === 5 || sum === 7 || sum === 11) {
      isSpecial = "True";
    } else {
      isSpecial = "False";
    }

    console.log(`${i} -> ${isSpecial}`);
  }
}
specialNumber(15);
specialNumber(20);
