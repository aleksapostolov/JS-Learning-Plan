function passwordGenerator(arr){

    let password = (arr[0] + arr[1])

    let word = arr[2].toUpperCase()
    let vowels = ""
    
    for (let letterToChange of password) {
        if (letterToChange === "a" || letterToChange === "e" || letterToChange === "i" || letterToChange === "o" || letterToChange === "u") {
        vowels += letterToChange
        }  
    }
    vowels = vowels.split("")


        for (let i = 0, j = 0; i < vowels.length; i++, j++){
            if (i === word.length) {
                j = 0;
            }
            password = password.replace(vowels[i], word[j])
            }

            password = password.split("").reverse().join("");

            console.log(`Your generated password is ${password}`)

}
passwordGenerator([
    'ilovepizza', 
    'ihatevegetables',
    'orange'])

passwordGenerator([
    'easymoneyeazylife', 
    'atleasttencharacters', 
    'absolute'])

passwordGenerator([
    'areyousureaboutthisone', 
    'notquitebutitrustyou', 
    'disturbed']) 