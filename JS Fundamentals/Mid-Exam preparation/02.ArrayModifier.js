function arrayModifier(arr){

    let workingArray = arr.shift().split(' ').map(Number);
    let index = 0;
 
    let command = arr.shift();
    index++;

    while (command !== 'end'){
        
        let tempArray = command.split(' ');
        let operation = tempArray.shift();
        let firstNum = Number(tempArray[0]);
        let secondNum = Number(tempArray[1]);
    
        switch (operation) { 
            case 'swap': // разменяме местата на два елемента
                let firstTempNumber = workingArray[firstNum];
                let secondTempNumber = workingArray[secondNum];
                
                workingArray[secondNum] = firstTempNumber;
                workingArray[firstNum] = secondTempNumber;
                
                
                break;
        
            case 'multiply': // умножаваме елемента на първа позиция с елемента от втора
               workingArray[firstNum] = workingArray[firstNum] * workingArray[secondNum]
                
                break;
            case 'decrease': // намаляме всички елементи от масива с 1
                workingArray = workingArray.map((el) => {return Number(el - 1)});
                
                break;
            
        }

        command = arr.shift()
        index++; 
    }

    console.log(workingArray.join(', '))
    
}
arrayModifier( ['23 -2 321 87 42 90 -123',    'swap 1 3',    'swap 3 6',    'swap 1 0',    'multiply 1 2',    'multiply 2 1',    'decrease',    'end']  );
console.log('------------------------')
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  );