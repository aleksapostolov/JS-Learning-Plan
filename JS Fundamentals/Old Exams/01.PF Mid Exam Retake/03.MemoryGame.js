function memoryGame(array) {
  let workingArray = array.shift().split(" ");
  let turnsCounter = 0;
  command = 0;
  let elementsCounter = workingArray.length;
  let isWon = true;

  for (i = 0; i < array.length; i++) {
    command = array[i];
    if (elementsCounter === 0) {
      isWon = true;
      break;
    }
    turnsCounter++;

    if (command === "end") {
      isWon = false;
      console.log("Sorry you lose :(");
      console.log(`${workingArray.join(" ")}`);
      break;
    }
    let tempIndex = command.split(" ").map(Number);
    let value1 = tempIndex[0];
    let value2 = tempIndex[1];
    let value1OfWorkingArray = workingArray[value1];
    let value2OfWorkingArray = workingArray[value2];

    if (value1 < 0 || value2 < 0 || value1 === value2) {
      workingArray.splice(
        workingArray.length / 2,
        0,
        `-${turnsCounter}a`,
        `-${turnsCounter}a`
      ); // намира средата на масива и добавя два елемента.
      elementsCounter += 2;
      console.log("Invalid input! Adding additional elements to the board");
    } else {
      if (value1OfWorkingArray === value2OfWorkingArray) {
        console.log(
          `Congrats! You have found matching elements - ${workingArray[value1]}!`
        );

        let elementOfSecondIndex = workingArray[value2];
        workingArray.splice(value1, 1);
        let newIndexOfElement = workingArray.indexOf(elementOfSecondIndex);
        workingArray.splice(newIndexOfElement, 1);
        elementsCounter -= 2;
      } else if (value1OfWorkingArray !== value2OfWorkingArray) {
        console.log("Try again!");
      }
    }
  }

  if (isWon) {
    console.log(`You have won in ${turnsCounter} turns!`);
  }
}
/* memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]); */

memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
/* memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);  */
