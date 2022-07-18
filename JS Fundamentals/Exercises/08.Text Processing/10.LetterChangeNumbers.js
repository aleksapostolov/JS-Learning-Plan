function lettersChangeNumbers(input) {

    let allStrings = input.split(' ');
    let totalSum = 0;
    
    for (let string of allStrings) {
    
        if (string.length > 0) { // in case the strings are separated by more white spaces
        let number = Number(string.substring(1, string.length - 1));
        let firstLetter = string.substring(0, 1);
        let secondLetter = string.substring(string.length - 1, string.length)
        
    
            if (firstLetter === firstLetter.toUpperCase()) {
                // Uppercase letters in the ASCII table are between 65-90
                // Lowercase letters in the ASCII table are between 97-122
                let divide = firstLetter.charCodeAt() - 64; // вадим от позицията на буквата в ASCII таблицата 64
                    number = number / divide;
                } else {
                    let multiply = firstLetter.charCodeAt() - 96; // вадим от позицията на буквата в ASCII таблицата 96
                    number = number * multiply;
                }
                    if (secondLetter === secondLetter.toUpperCase()) {
                    let substract = secondLetter.charCodeAt() - 64;
                    number = number - substract;
                } else {
                    let add = secondLetter.charCodeAt() - 96;
                    number = number + add;
                }
    
                totalSum += number;
                }
            }
        
        console.log(totalSum.toFixed(2));
    
    }
    lettersChangeNumbers('A12b s17G')
    console.log("________________________")
    lettersChangeNumbers('P34562Z q2576f   H456z')
    console.log("________________________")
    lettersChangeNumbers('a1A')