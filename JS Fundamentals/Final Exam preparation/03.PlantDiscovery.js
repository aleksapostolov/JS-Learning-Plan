function plantDiscovery(arr){

    let exhibitionPlants = {};
    let number = Number(arr.shift());

    for (let i = 0; i < number; i++){
        let token = arr.shift().split('<->');
        let plant = token[0];
        let rarity = Number(token[1]);

        if (!exhibitionPlants.hasOwnProperty(plant)){
            exhibitionPlants[plant] = [];
            exhibitionPlants[plant].push(rarity)
        } else {
            exhibitionPlants[plant][0] = rarity
        }
    }

    for (let j = 0; j < arr.length; j++){

        if (arr[j] === 'Exhibition'){
            break;
        }

        let commandLine = arr[j].split(': ');
        let command = commandLine[0];
        let plantInfo = commandLine[1].split(' - ')

        if (command === 'Rate'){
            let plant = plantInfo[0];
            let rating = Number(plantInfo[1]);

            if (!exhibitionPlants.hasOwnProperty(plant)){
                console.log('error');
            } else {
                exhibitionPlants[plant].push(rating)
            }
        }

        if (command === 'Update'){
            let plant = plantInfo[0];
            let rarity = Number(plantInfo[1]);

            if (!exhibitionPlants.hasOwnProperty(plant)){
                console.log('error');
            } else {
                exhibitionPlants[plant][0] = rarity;
            }
        }

        if (command === 'Reset'){
            let plant = plantInfo[0];

            if (!exhibitionPlants.hasOwnProperty(plant)){
                console.log('error');
            } else {
                exhibitionPlants[plant].splice(1, exhibitionPlants[plant].length - 1);
            }
        }     
    }

    console.log('Plants for the exhibition:')

    for (let key of Object.keys(exhibitionPlants)){

        let totalRating = 0;
        let count = 0;

        for (let i = 1; i < exhibitionPlants[key].length; i++){
            totalRating += exhibitionPlants[key][i];
            count++;
        }

        let avgRating = totalRating / count;
        if(exhibitionPlants[key].length === 1){
            console.log(`- ${key}; Rarity: ${exhibitionPlants[key][0]}; Rating: 0.00`);
        } else {
            console.log(`- ${key}; Rarity: ${exhibitionPlants[key][0]}; Rating: ${avgRating.toFixed(2)}`);
        }
    }
}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
;
console.log('-------------')
plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])
;