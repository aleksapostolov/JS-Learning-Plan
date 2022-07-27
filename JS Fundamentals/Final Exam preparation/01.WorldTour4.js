function worldTour(data){

    let myObj = {
        AddStop: function (index, value, initialString){
            startIndex = Number(index);
            if (startIndex < 0 || startIndex >= initialString.length){
                return initialString;
            }
            
            let firstPart = initialString.slice(0, startIndex);
            let secondPart = initialString.slice(startIndex, initialString.length);

            initialString = firstPart + value + secondPart;
            return initialString
        },
        RemoveStop: function (startIndex, endIndex, initialString){
            startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        if(!initialString[startIndex] || !initialString[endIndex]){
           return initialString;
        }
        let subString = initialString.substring(startIndex, endIndex + 1);
        return initialString.replace(subString, '');
        },
        Switch: function (oldValue, newValue, initialString){
            let pattern = new RegExp(oldValue, 'g')
        return initialString.replace(pattern, newValue);
        }
    }

    let initialString = data.shift();

    let line =  data.shift();
    
    while (line !== 'Travel'){
        let [action, firstParam, lastParam] = line.split(':');
        let startIndex;
        let endIndex;
        action = action.split(' ').join('')
        initialString = myObj[action](firstParam, lastParam, initialString)
        console.log(initialString);
        line = data.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${initialString}`);
   
}
worldTour((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
);
