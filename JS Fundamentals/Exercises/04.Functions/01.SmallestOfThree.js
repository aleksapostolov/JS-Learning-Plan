function smallestOfThree(first, second, last){

    let smallestNumber = Math.min(first, second, last)  /* с Math.max() дава най-голямото число, дори и от масив */

    console.log(smallestNumber)
}
smallestOfThree(2,5,3);