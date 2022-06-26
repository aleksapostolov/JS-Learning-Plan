function taxCalculator(arr){

let line = arr.shift().split('>>')
let el = line.length


let totalTaxCollected = 0; 


for (i = 0; i < el; i++){
    let perCarArray = line.shift().split(' ');
    let carType = perCarArray[0];
    let yearsToTax = Number(perCarArray[1]);
    let kmTravelled = Number(perCarArray[2]);

    let familyTax = 50;
    let heavyDutyTax = 80;
    let sportsTax = 100;

    switch (carType) {
        case 'family':
            familyTax -= yearsToTax * 5;
            if (kmTravelled >= 3000){
            let familyCount = Math.floor(kmTravelled / 3000);
            familyTax += familyCount * 12;
            }
            totalTaxCollected += familyTax
            console.log(`A ${carType} car will pay ${familyTax.toFixed(2)} euros in taxes.`)
            break;

        case 'heavyDuty':
            heavyDutyTax -= yearsToTax * 8;
            if(kmTravelled >= 9000){
            let hdCount = Math.floor(kmTravelled / 9000);
            heavyDutyTax += hdCount * 14;
            }
            totalTaxCollected += heavyDutyTax
            console.log(`A ${carType} car will pay ${heavyDutyTax.toFixed(2)} euros in taxes.`)
            break;

        case 'sports':
            sportsTax -= yearsToTax * 9;
            if(kmTravelled >= 2000){
            let sportsCount = Math.floor(kmTravelled / 2000);
            sportsTax += sportsCount * 18;
            }
            totalTaxCollected += sportsTax
            console.log(`A ${carType} car will pay ${sportsTax.toFixed(2)} euros in taxes.`)
            break;
    
        default:
            console.log('Invalid car type.');
            
            break;
    }

    
    
}

console.log(`The National Revenue Agency will collect ${totalTaxCollected.toFixed(2)} euros in taxes.`)

}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])

console.log('--------------') 
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'])