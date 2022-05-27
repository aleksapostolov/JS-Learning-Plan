function rightPLace(string1, char, string2){

    let newString = string1.replace("_", char);

    /* if (newString === string2) {
        
        console.log("Matched")
    } else {
        console.log("Not Matched")
    } */

    let result = (newString === string2) ? "Matched" : "Not Matched"
    console.log(result);

}
rightPLace('Str_ng', 'I', 'Strong');
rightPLace('Str_ng', 'i', 'String')