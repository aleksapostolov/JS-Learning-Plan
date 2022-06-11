function perfectNumber(number){

    let sumOfDivisors = 1;

    for (let currentNumber = 2; currentNumber < number; currentNumber++) {
        if(number % currentNumber === 0){
            sumOfDivisors += currentNumber;

        }
        
    }

    /* if(sumOfDivisors === number) {
        console.log('We have a perfect number!')
    } else {
        console.log("It's not so perfect.")
    } */

    let result = (sumOfDivisors === number) ? // решение с тернарен оператор
    'We have a perfect number!' : "It's not so perfect."
    console.log(result);
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);