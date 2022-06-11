function print (startNumber, endNumber){

    let sum = 0;
    let printLine = '';

    for (currentNumber = startNumber; currentNumber <= endNumber; currentNumber++){
        sum += currentNumber;

        if(currentNumber === endNumber){
            printLine +=`${currentNumber}`
             
        } else {

    printLine +=`${currentNumber} `
}
    }

    console.log(printLine);
    console.log(`Sum: ${sum}`)
}
print(5, 10);
print(0, 26);
print(50, 60);