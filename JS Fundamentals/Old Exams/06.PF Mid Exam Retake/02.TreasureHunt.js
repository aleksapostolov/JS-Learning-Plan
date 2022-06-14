function treasureHunt(array) {
  let chestContains = array.shift().split("|");
  let counter = array.length;
  newArray= [];
  let index = 0;
  let command = array[index];

  while (command !== 'Yohoho!'){
    command = array[index];
    newArray.push(command)

    let action = newArray[0];
    let lootToAdd = newArray[1];

    if (action === 'Loot') {
        console.log(result) 
        let result = chestContains.every(function (element) {
            return newArray.includes(element) !== -1;

           
          });
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
