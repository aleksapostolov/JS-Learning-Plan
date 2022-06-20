function manOWar(input){

    let statusPirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxSectionHealth = Number(input.shift());

    let index = 0;
    let line = input[index];
    index++;
    let isGameOver = false;
    while(line !== 'Retire'){
        let tokens = line.split(' ');
        let i;

        switch (tokens[0]) {
            case 'Fire':
                i = Number(tokens[1]);
                let damage = Number(tokens[2]);
                if(i < 0 || i > warShip.length){ //проверяваме дължината на иднекса и да не е отрицателен инпута, за да не се счупи;
                    line = input[index];
                    index++;
                    continue;
                }
                warShip[i] -= damage;
                if(warShip[i] <= 0){
                    isGameOver = true;
                    console.log(`You won! The enemy ship has sunken.`)
                    break;
                }
                break;
            case 'Defend':
                i = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                let dmg = Number(tokens[3]);
                // може да гръмне, ако старт индекса е по-голям от крайния
                if(i < 0 || i > statusPirateShip.length - 1 || endIndex < 0 || endIndex > statusPirateShip.length){
                    line = input[index];
                    index++;
                    continue;
                }
                for (let x = i; x <= endIndex; x++){ //превърта от старт до енд индекс и на всяка итерация взима нужния 'дъмейдж' на секция
                    statusPirateShip[x] = statusPirateShip[x] - dmg;

                    if (statusPirateShip[x] < 0){ 
                        console.log(`You lost! The pirate ship has sunken.`)
                        isGameOver = true;
                        break;
                    }
                }
                break;
            case 'Repair':
                i = Number(tokens[1]);
                let health = Number(tokens[1]);
                if(i < 0 || i > statusPirateShip.length - 1){
                    line = input[index];
                    index++;
                    continue;
                }
                if (statusPirateShip + health <= maxSectionHealth){
                statusPirateShip[i] = statusPirateShip + health;
                } else {
                    statusPirateShip[i] = maxSectionHealth;
                }
                break;

            case 'Status':
                let breakPoint = maxSectionHealth * 0.2;
                let result = statusPirateShip.filter(el => el < breakPoint);
                console.log(result.length + " sections need repair.")
                break;
        }
        if(isGameOver){
            break;
        }
        line = input[index];
        index++;
    }
    
    let warShipResult = 0;
    let pirateShipResult = 0;
    for (let sections of warShip){
        warShipResult += sections;
    }
    for(let sections of statusPirateShip){
        pirateShipResult =+ sections
    }

    if(!isGameOver){
    console.log(`Pirate ship status: ${pirateShipResult}`)
    console.log(`Warship ship status: ${warShipResult}`)
    }
    
}
manOWar(["12>13>11>20>66","12>22>33>44>55>32>18","70","Fire 2 11","Fire 8 100","Defend 3 6 11","Defend 0 3 5","Repair 1 33","Status","Retire"]);
manOWar(["2>3>4>5>2","6>7>8>9>10>11","20","Status","Fire 2 3","Defend 0 4 11","Repair 3 18","Retire"]);
