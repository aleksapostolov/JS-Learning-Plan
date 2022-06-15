function treasureHunt(array) {
  let chestContains = array.shift().split("|"); // нашето инвентори
  let counter = array.length;
  newArray= [];
  let index = 0;
  let command = array[index];

  while (command !== 'Yohoho!'){
    command = array[index];
    newArray.push(command) //пушваме следващият индекс от масива в нов масив, за да работим само с него

    let action = newArray[0]; // действието от новия масив - Loot, Steal или Drop
    let restOfarray = newArray[1]; // благинките в новият масив след действието, които ще се въртят

    if (action === 'Loot') {
      // for цикъл да превърта прес resrOfArray и да сравнява дали съдържанието го има в chestContans масива...
      
    }
/*     console.log(newArray);
 */    newArray=[];
    index++;
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
