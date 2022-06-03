function mergeArrays(firstArr, secondArr){

    let newArray = [];
    let inputL = firstArr.length

    for (let i = 0; i < inputL; i++) {
        if (i % 2 === 0){
            newArray[i]= Number(firstArr[i]) + Number(secondArr[i])     
        } else {
            newArray[i] = firstArr[i] + secondArr[i] 
       }
        
    }
    console.log(newArray.join(" - "))
}
mergeArrays(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11'])
mergeArrays(['13', '12312', '5', '77', '4'],['22', '333', '5', '122', '44'])