function passwordReset(arr){

    let password = arr.shift();
    
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split(' ');
        let command = token[0];

        if (command === 'Done'){
            console.log(`Your password is: ${password}`)
            break;
        }
        
        if (command === 'TakeOdd'){
            let text = [];

            for (let j = 0; j < password.length ; j++){
                if (j % 2 !== 0){
                    text.push(password[j]);
                }   
            }
            password = text.join('');
            console.log(password)
        } 
        
        if (command === 'Cut'){
            let index = Number(token[1]);
            let length = Number(token[2]);
            let endIndex = index + length;

            let firstPart = password.substring(0, index);
            let secondPart = password.substring(endIndex, password.length)

            password = firstPart + secondPart;
            console.log(password)
        }

        if (command === 'Substitute'){
            let substring = token[1];
            let substritute = token[2];
            
            if (password.includes(substring)){
                while (password.includes(substring)){
                password = password.replace(substring, substritute);
                }
                console.log(password);
            } else {
                console.log('Nothing to replace!')
            }
        }
        
    }
    
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);