function theImitationGame(arr){

    let messageToDecode = arr.shift()

   

    for (let i = 0; i < arr.length; i++){
        let token = arr[i].split('|');
        let command = token[0];
        
        if(command === 'Decode'){
            break;
        }

        if(command === 'ChangeAll'){
            let substring = token[1];
            let replacement = token[2];

            while (messageToDecode.includes(substring)){
                messageToDecode = messageToDecode.replace(substring, replacement)
            }
        }

        if(command === 'Insert'){
            let index = Number(token[1]);
            let value = token[2];
            let firstPart = messageToDecode.substring(0,index);
            let secondPart = messageToDecode.substring(index, messageToDecode.length);
            
            messageToDecode = firstPart + value + secondPart;
        }

        if(command === 'Move'){
            let numberOfLetters = Number(token[1]);
            let firstPart = messageToDecode.substring(0, numberOfLetters);
            let secondPart = messageToDecode.substring(numberOfLetters, messageToDecode.length);

            messageToDecode = secondPart + firstPart
            
        }
     
    }

    console.log(`The decrypted message is: ${messageToDecode}`)
    
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