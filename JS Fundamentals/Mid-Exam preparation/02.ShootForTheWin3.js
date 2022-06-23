function shootForTheWin(arr) {
  let targetsArray = arr.shift().split(" ").map(Number);
  let targetsShot = 0;
  let previousValue = 0;
  let index = 0;
  let command = arr[index];
  index++;

  while (command !== "End") {
    let shots = Number(command);
    if (targetsArray.includes(targetsArray[shots])) {
      targetsShot++;
      previousValue = targetsArray[shots];
      targetsArray.splice(shots, 1, -1);
      for (let i = 0; i < targetsArray.length; i++) {
        if (targetsArray[i] !== -1 && targetsArray[i] <= previousValue) {
          targetsArray[i] += previousValue;
        } else if (targetsArray[i] > 0 && targetsArray[i] > previousValue) {
          targetsArray[i] -= previousValue;
        }
      }
    }

    command = arr[index];
    index++;
  }

  console.log(`Shot targets: ${targetsShot} -> ${targetsArray.join(" ")}`);
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);

console.log("-----------------");

shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
