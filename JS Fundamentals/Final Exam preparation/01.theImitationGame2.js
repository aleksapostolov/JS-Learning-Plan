function theImitationGame(arr){

    let message = arr.shift()

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "Decode"){
            break;
        }

        let tokens = arr[i].split("|");
        let command = tokens[0];

        if (command === "ChangeAll"){
            let substring = tokens[1]; 
            let replacement = tokens[2];  
            while(message.includes(substring)){
                message = message.replace(substring, replacement);
            }
        }

        if (command === "Insert"){
            let index = Number(tokens[1]);  
            let value = tokens[2];  
            let firstPart = message.substring(0, index);
            let secondPart = message.substring(index, message.length);
            message = firstPart + value + secondPart;
        }

        if (command === "Move"){
            let numberOfLetters = Number(tokens[1]);  
            let firstPart = message.substring(0, numberOfLetters);
            let secondPart = message.substring(numberOfLetters, message.length);
            message = secondPart + firstPart;
        }

    }

    console.log(`The decrypted message is: ${message}`)
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  );
  console.log('-------------') 
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);
