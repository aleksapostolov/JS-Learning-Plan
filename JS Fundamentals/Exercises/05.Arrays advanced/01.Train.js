function train(array) {
  let passengersInTrainArr = array.shift().split(" ").map(Number); // за разлика от slice split ни дава стойност на масив, 
  //който превръщаме в число, чак когато ни тряба
  let maxCapacity = +array.shift(); // + parse-ва към число

  for (let i = 0; i < array.length; i++) {
    let commandNum = array[i].split(" ");

    if (commandNum[0] === "Add") {
      passengersInTrainArr.push(Number(commandNum[1]));
    } else {
      for (let j = 0; j < passengersInTrainArr.length; j++) {
        if (Number(commandNum[0]) + passengersInTrainArr[j] <= maxCapacity) {
          passengersInTrainArr[j] += Number(commandNum[0]);
          break;
        }
      }
    }
  }
  console.log(passengersInTrainArr.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
