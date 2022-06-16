function treasureHunt(array) {

  let chestContains = array.shift().split("|") //отделяме първата част на масива, в отделна такава

  for (let line of array) { //започваме да въртим, като
      let lineInfo = line.split(" "); //отделяме първата част на останалия масив
      let command = lineInfo.shift(); // и взимаме първата дума от темпорари масива

  switch (command) {
      case 'Loot': 
      loot(lineInfo);
      break;
      case 'Drop': 
      drop(lineInfo);
      break;
      case 'Steal':
      steal(lineInfo);
      break;
      default:
      print(chestContains);

  }


  function loot(loot) { // взимаме елемента и го слагаме в началото на масива. Ако елемнта вече присъства, не го добавя.
      for (let item of loot){
          let hasItem = chestContains.includes(item);
              if (!hasItem){
                  chestContains.unshift(item)
              }
      }
  }

  function drop(index) { //маха елемнта от конкретна позицията (ЧИСЛО) на която се намира и го слага най-отзад
      /* let currentElem = chestContains[index] */  
      if (chestContains[index] !== undefined) {
          let item = chestContains[index]
          chestContains.splice(index, 1)
          chestContains.push(item)
      }
  }

  function steal(number){ //o	Someone steals the last count loot items. If there are fewer items than the given count, remove as much as there are. 
//Print the stolen items separated by ", ":
      let startIndex = Math.max(0, chestContains.length - number)
      let stolenItems = chestContains.splice(startIndex, chestContains.length)
      console.log(stolenItems.join(", "))
  }

  function print(chestContains){ //при получаване на команда за край
      let counter = 0;
      for (let word of chestContains){
          let wordLength = word.length
          counter += wordLength
      }

  let numberOfElements = chestContains.length;
      if (numberOfElements > 0){ 
          let averageGain = counter / numberOfElements
          console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`)
      } else {
          console.log("Failed treasure hunt.")
      }
  }

  }

}
 
treasureHunt([
"Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!",
]);
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);