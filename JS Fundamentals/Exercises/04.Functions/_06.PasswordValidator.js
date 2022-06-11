function passwordValidator(input){

    let counter = 0;
    let numberCounter = 0;
    let string ='';

    for (let i = 0; i < input.length; i++){
        let string = input[i];
        counter++

        if (/\d/.test(string)){
            numberCounter++
          }
        }

        if (counter >= 6){
            if (numberCounter >= 2){
                if (/^[A-Za-z0-9 -]$/.test(string)){
                    }
                }
            }
            console.log("Password is valid")

}
passwordValidator('logIn') 
passwordValidator('MyPass123')
passwordValidator('Pa$s$s') 