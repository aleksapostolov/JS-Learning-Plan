function smallestOfTwoNumbers(numbers){

    let sortedAscendingOrder = numbers.sort((a, b) => {return a - b}).slice(0,2).join(' ');

    console.log(sortedAscendingOrder)
}
smallestOfTwoNumbers([30, 15, 50, 5]);
smallestOfTwoNumbers([3, 0, 10, 4, 7, 3]);