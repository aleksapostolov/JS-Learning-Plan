function interviewTest(first, second){

    let firstNumbersArr = [];
    let secondNumbersArr = [];

    firstNumbersArr = first.map(Number).filter(el => !isNaN(el));
    secondNumbersArr = second.map(Number).filter(el => !isNaN(el));

    let resultArray = firstNumbersArr.concat(secondNumbersArr);


    console.log(Math.max(...resultArray) - Math.min(...resultArray)) // С .... разлагаме масива на съставните му елементи, защото Math.max/Math.min не работят с масиви

}
interviewTest([1, 'asd', '1', {}, '1a00', 5, -11, 3],[10,22,'a',false]);

// две

function interviewTest(first, second){

    let resultArray = first.concat(second);

    resultArray = resultArray.map(Number).filter(el => !isNaN(el));

    console.log(Math.max(...resultArray) - Math.min(...resultArray)) 

}
interviewTest([1, 'asd', '1', {}, '1a00', 5, -11, 3],[10,22,'a',false]);