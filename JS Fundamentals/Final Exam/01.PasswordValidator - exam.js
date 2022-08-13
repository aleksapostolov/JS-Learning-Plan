function passwordValidator(input){

    let string = input.shift(); 
    let regexAll = /[A-Za-z0-9\_]/g
    let regexUpperCase = /[A-Z]/g
    let regexLowerCase = /[a-z]/g
    let regexDigit = /[0-9]/g

    for (let i = 0; i < input.length; i++){ 
        let tokens = input[i].split(" ") 
        let command = tokens[0]

        if (command === "Complete"){
          break;
        }

        if (command === "Make"){
            let subCommand = tokens[1]
                if (subCommand === "Upper"){
                let index = Number(tokens[2]);
                let firstPart = string.substring(0, index);
                let secondPart = string.substring(index + 1, string.length);
                let char = string[index].toUpperCase()
                string = firstPart + char + secondPart;
                console.log(string)
            } else {
                let index = Number(tokens[2]);
                let firstPart = string.substring(0, index);
                let secondPart = string.substring(index + 1, string.length);
                let char = string[index].toLowerCase()
                string = firstPart + char + secondPart;
                console.log(string)
            }
        }

        if (command === "Insert"){
            let index = Number(tokens[1]);
            let char = tokens[2]
            if (index >= 0 && index < string.length){ 
                if (index >= 0 && index < string.length){ 
                let firstPart = string.substring(0, index);
                let secondPart = string.substring(index, string.length)
                string = firstPart + char + secondPart
                } 
            }
            console.log(string)
        }
if (command === "Replace"){
            let char = tokens[1];
            let value = Number(tokens[2]);
            let newChar = String.fromCharCode(char.charCodeAt(0) + value);
            while (string.includes(char)){
            string = string.replace(char, newChar);
            }
            console.log(string)
        } 

        if (command === "Validation"){
            if (string.length < 8){
                console.log("Password must be at least 8 characters long!")
            }

            if (!regexAll.test(string)){
                console.log("Password must consist only of letters, digits and _!")
            }

            if (!regexUpperCase.test(string)){
                console.log("Password must consist at least one uppercase letter!")
            }

            if (!regexLowerCase.test(string)){
                console.log("Password must consist at least one lowercase letter!")
            }

            if (!regexDigit.test(string)){
                console.log("Password must consist at least one digit!")
            }
        } 
    }

}

passwordValidator(['invalidpassword*',
'Add 2 p',
'Replace i -50',
'Replace * 10',
'Make Upper 2',
'Validation',
'Complete'])
;
passwordValidator(['123456789',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete'])
;