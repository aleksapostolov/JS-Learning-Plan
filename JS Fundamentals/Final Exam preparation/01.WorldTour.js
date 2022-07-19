function worldTour(arr){

    let stopsString = arr.shift();

    for (let i = 0; i < arr.length; i++){
        
        let token = arr[i].split(':');
        let command = token[0];

        if (command === 'Travel'){
            break;
        }
        
        if (command === 'Add Stop'){
            let index = Number(token[1]);
            let string = token[2];

            if (index >= 0 && index < stopsString.length){
                let firstPart = stopsString.substring(0, index);
                let secondPart = stopsString.substring(index, stopsString.length)
                stopsString = firstPart + string + secondPart;

                
            }    
            console.log(stopsString); 
        }

        if (command === 'Remove Stop'){
            let startIndex = Number(token[1]);
            let endIndex = Number(token[2]);

            if (startIndex >= 0 && startIndex < stopsString.length){

                if (endIndex >= 0 && endIndex < stopsString.length){
                
                    let firstPart = stopsString.substring(0, startIndex);
                    let secondPart = stopsString.substring(endIndex + 1, stopsString.length)

                    stopsString = firstPart + secondPart;
                    
                }
            } 
            console.log(stopsString);    
        }

        if (command === 'Switch'){
            let oldString = token[1];
            let newString = token[2];

            if (stopsString.includes(oldString)){
                stopsString = stopsString.replace(oldString, newString)
            }
            console.log(stopsString);
        }
    }

    console.log(`Ready for world tour! Planned stops: ${stopsString}`);
}
worldTour((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
);
