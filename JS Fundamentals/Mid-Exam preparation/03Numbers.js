function numbers(sequence){

    let arrOfStrings = sequence.split(" ");
    let arrOfNumbers = [];
    let sum = 0;

    for(let el of arrOfStrings){
        
        let currentNumber = Number(el)
        arrOfNumbers.push(currentNumber);
        sum += currentNumber;
    }

    let average = sum / arrOfNumbers.length;
    

    let greaterThanAverage = [];

    for (let el of arrOfNumbers){
        if(el > average){
            greaterThanAverage.push(el);
        }
    }
    greaterThanAverage.sort((a,b) => b-a);
    for (let i = 0; i < 5 && i < greaterThanAverage.length; i++){
        console.log(greaterThanAverage[i])
    }
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');
