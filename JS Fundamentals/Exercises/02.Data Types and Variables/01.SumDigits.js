function sumDigits(input){

    let numAsString = input.toString();  // moje i da go syberem sys prazen string
    let sumOfAllDigits = 0;

    for (let index = 0; index < numAsString.length; index++){
        let currentDigit = Number(numAsString[index])
        sumOfAllDigits += currentDigit
    }
     
    console.log(sumOfAllDigits)
}
sumDigits(245678)
sumDigits(97561)
sumDigits(543)