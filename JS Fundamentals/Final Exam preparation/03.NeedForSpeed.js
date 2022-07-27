function needForSpeed(arr){

    let garage = {};
    let numberOfCars = Number(arr.shift());

    
    for (let i = 0; i < numberOfCars; i++) {
        
        let tokens = arr[i].split('|');
        let car = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);
        
        if (!garage.hasOwnProperty(car)){
            garage[car] = [];
            garage[car].push(mileage);
            garage[car].push(fuel);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        
       
        if (arr[i] === 'Stop'){
            break;
        }

        let tokens = arr[i].split(' : ');
        let command = tokens[0];

        if (command === 'Drive'){
            let car = tokens[1];
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);

            if (garage.hasOwnProperty(car)){

                if (Number(garage[car][1]) < fuel){
                    console.log('Not enough fuel to make that ride');
                } else {
                    garage[car][0] += distance;
                    if(garage[car][0] >= 100000){
                        console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
                        console.log(`Time to sell the ${car}!`)
                        delete garage[car];

                    } else {
                        garage[car][1] -= fuel;
                        console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
                    }
                }
            }
        }

        if (command === 'Refuel'){
            let car = tokens[1];
            let fuel = Number(tokens[2]);
            let difference = 75 - garage[car][1];
            garage[car][1] += fuel

            if (garage[car][1] > 75){
                garage[car][1] = 75
                console.log(`${car} refueled with ${difference} liters`);
            } else {
                console.log(`${car} refueled with ${fuel} liters`);
            }  
        }
        
        if (command === 'Revert'){
            let car = tokens[1];
            let kilometers = Number(tokens[2]);
            garage[car][0] -= kilometers;

            if (garage[car][0] < 10000){
                garage[car][0] = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }   
        }
    
    }

    for (let [key, values] of Object.entries(garage)){
        console.log(`${key} -> Mileage: ${values[0]} kms, Fuel in the tank: ${values[1]} lt.`)
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  );
console.log('-------------')
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  );