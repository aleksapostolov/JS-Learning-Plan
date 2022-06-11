function magicSum(array, number){

    let arrOfValidPairs = [];
    let validPair = '';

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] === number){
                validPair = `${array[i]} ${array[j]}`;
                arrOfValidPairs.push(validPair)
            }
        }
        
    }
    console.log(arrOfValidPairs.join('\n'))
}
magicSum([1, 7, 6, 2, 19, 23],8)
magicSum([14, 20, 60, 13, 7, 19, 8],27)
magicSum([1, 2, 3, 4, 5, 6],6)