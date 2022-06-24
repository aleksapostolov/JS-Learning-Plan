function inventory(arr){

    let workingArray = arr.shift().split(', ');

    let index = 0;
    let command = arr.shift();
    index++;


    while (command !== 'Craft!') {
         
        let arrOfCommand = command.split(' - ');
        let action = arrOfCommand[0];
        let item = arrOfCommand[1];

         switch (action) {
            case 'Collect': // добаваме елемент към масива, ако не съществува вече в него
                let ifContains = workingArray.includes(item);
                if (!ifContains){
                    workingArray.push(item)
                }
                break;

            case 'Drop': // махаме елемент от масива, ако съществува
                let itemExists = workingArray.includes(item);
                if (itemExists){
                    let itemForDeleteion = workingArray.indexOf(item)
                    workingArray.splice(itemForDeleteion, 1)
                }
                 break;

             case 'Combine Items': // ако първият елемент съществува добавяме втори след него
                let newArray = item.split(':');
                let firstItem = newArray[0];
                let secondItem = newArray[1];
                let oldItemExists = workingArray.includes(firstItem);
                if (oldItemExists){
                    let existingItem = workingArray.indexOf(firstItem)
                    workingArray.splice(existingItem + 1, 0, secondItem)
                }

                break;

            case 'Renew': // ако елемент съществува го пушваме в края на масива и след това изрязваме
                
                let ifContainsRenew = workingArray.includes(item);
                let positionForChange = workingArray.indexOf(item);
                if (ifContainsRenew){
                    workingArray.push(item)
                    workingArray.splice(positionForChange, 1)
                    
                }
                break; 
        
           
        } 

        
        command = arr.shift();
        index++;
    }

    console.log(workingArray.join(', '))
}
inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]
  );
  console.log('--------------------')
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  );