function angryCat(workingArr, entryPoint, itemValue){

    
    leftArray = workingArr.slice(0, entryPoint);
    rightArr = workingArr.slice(entryPoint + 1, workingArr.length);

    let sumOfLeftArr = 0;
    let sumOfRightArr = 0;
    let entryPointValue = workingArr[entryPoint]

    for (let el of leftArray){
        if (itemValue === 'cheap' && el < entryPointValue){
            sumOfLeftArr += el;
        }
        if (itemValue === 'expensive' && el >= entryPointValue){
            sumOfLeftArr += el;
        }
    }
 
    for (let el of rightArr){
        if (itemValue === 'cheap' && el < entryPointValue){
            sumOfRightArr += el;
        }
        if (itemValue === 'expensive' && el >= entryPointValue){
            sumOfRightArr += el;
        }
    }

    if(sumOfLeftArr === sumOfRightArr){
        console.log(`Left - ${sumOfLeftArr}`)
    } else if (sumOfRightArr > sumOfLeftArr) {
        console.log(`Right - ${sumOfRightArr}`)
    } else {
        console.log(`Left - ${sumOfLeftArr}`)
    }
    
}
angryCat([1, 5, 1], 1, "cheap")    ;
angryCat([5, 10, 12, 5, 4, 20], 3, "cheap")    ;
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");