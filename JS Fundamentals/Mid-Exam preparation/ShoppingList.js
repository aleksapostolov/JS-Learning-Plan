function shopingList(array){
 
    let listWithGroceries  = array.shift().split("!") 
 
    for (let line of array) { 
 
 
        let lineInfo = line.split(" "); 
 
        let command = lineInfo.shift(); 
 
    switch (command) {
        case 'Urgent': 
        urgent(lineInfo);
        break;
        case 'Unnecessary': 
        unnecessary(lineInfo);
        break;
        case 'Rearrange':
        rearrange(lineInfo);
        break;
        case 'Correct':
        correct(lineInfo);
        break; 
        default:
        print(listWithGroceries);
} 
 
    function urgent(functionOne) {  //добавяме елемнт в началот на масива
        for (let item of functionOne){
            let hasItem = listWithGroceries.includes(item);
                if (!hasItem){
                    listWithGroceries.unshift(item)
            }
        }
    }
 
    function unnecessary(functionTwo) {  // маха даден елемент от масив, само ако съществува. Ако го няма прескача командата.
        for (let unnecessatyItem of functionTwo){
            let hasUnnecessatyItem = listWithGroceries.includes(unnecessatyItem);
                if (hasUnnecessatyItem){
                    listWithGroceries.splice(listWithGroceries.indexOf(unnecessatyItem), 1) //маха определена дума от масива
            }
        }
    }
 
    function rearrange(functionTwo3) {  //ако елемента присъства в масива, го маха от неговата позиция и го слага накрая на масива.Ако го няма прескача командата.
        for (let itemToMove of functionTwo3){
            let hasItemToMove = listWithGroceries.includes(itemToMove);
                if (hasItemToMove){
                    listWithGroceries.splice(listWithGroceries.indexOf(itemToMove), 1)
                    listWithGroceries.push(itemToMove)
            }
        }
    }
 
    function correct(function4) {  //ако елемнта съществува в масива, променя името му с даденото на втора позиция.Ако го няма прескача командата.
            let itemForCorrection = function4.shift(0)
            let itemToCorrect = function4.shift(1)
 
        for (let index = 0; index < listWithGroceries.length; index++) {
            if (listWithGroceries[index] === itemForCorrection) {
                listWithGroceries[index] = itemToCorrect;
              break;
            }
            
        }
    }
 
    function print(function5){ // при командата за край
        
 
    let numberOfElements = listWithGroceries.length;
        if (numberOfElements > 0){ 
            let updatedList = listWithGroceries.join(", ")
            console.log(updatedList)
        } 
    }
 
}
 
 
}
shopingList((["Tomatoes!Potatoes!Bread","Unnecessary Milk","Urgent Tomatoes","Go Shopping!"]))
 
shopingList((["Milk!Pepper!Salt!Water!Banana","Urgent Salt","Unnecessary Grapes","Correct Pepper Onion","Rearrange Grapes","Correct Tomatoes Potatoes","Go Shopping!"]))