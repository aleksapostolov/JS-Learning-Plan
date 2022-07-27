function secretChat(arr){


    let string = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(':|:');
        let command = tokens[0];

        if (command === 'Reveal'){
            console.log(`You have a new text message: ${string}`);
            break;
        }

        if (command === 'ChangeAll'){

            let substring = tokens[1];
            let replacement = tokens[2];

            while (string.includes(substring)){
                string = string.replace(substring,replacement)
            }
            console.log(string)
        }

        if (command === 'Reverse'){

            let substring = tokens[1];

            if(string.includes(substring)){
                let newString = string.split(substring)
                substring = substring.split('').reverse().join('');
                string = newString.join(substring)
                console.log(string)
            } else{
                console.log('error')
            }
        }

        if (command === 'InsertSpace'){

            let index = Number(tokens[1]);
            let endIndex = string.length;
            let firstPart = string.substring(0 , index);
            let secondPart = string.substring(index, endIndex);
            string = firstPart + (' ') + secondPart;
            console.log(string)
        }
        
    }
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  );
  console.log('-------------');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  );