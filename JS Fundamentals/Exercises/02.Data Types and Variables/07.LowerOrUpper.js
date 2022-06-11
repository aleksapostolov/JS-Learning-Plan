function lowerOrUpper(input){

 /*    if (input === input.toUpperCase()){
        console.log('upper-case')
    } else{
        console.log('lower-case')
    } */

    let result = input === input.toUpperCase() ? `upper-case` : `lower-case`
    console.log(result)
}
lowerOrUpper('L')