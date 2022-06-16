function arrayManipulations(array) {
  let workingArr = array.shift().split(" ").map(Number);

  for (el of array) {
    let lineInfo = el.split(" ");
    let action = lineInfo.shift();
    let numberToProcess = lineInfo.map(Number);

    switch (action) {
      case "Add":
        add(numberToProcess);
        break;

      case "Remove":
        remove(numberToProcess);
        break;

      case "RemoveAt":
        removeat(numberToProcess);
        break;

      case "Insert":
        insert(numberToProcess);
        break;
    }

    function add(addToElement) {
      for (let number of addToElement) {
        workingArr.push(number);
      }
    }

    function remove(num) {
      for (let numberToProcess of num) {
        let numberToRemove = workingArr.includes(numberToProcess);
        if (numberToRemove) {
          workingArr.splice(workingArr.indexOf(numberToProcess), 1);
        }
      }
    }

    function removeat(indexOfToRemove) {
      for (let number of indexOfToRemove) {
        workingArr.splice(number, 1);
      }
    }

    function insert(num) {
      let index = num[1];
      let additive = num[0];
      workingArr.splice(index, 0, additive);
    }
  }

  console.log(workingArr.join(" "));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
