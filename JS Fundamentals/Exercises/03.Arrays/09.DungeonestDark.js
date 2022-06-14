function dungeonestDark(input) {
    let text = String(input);
    let array = text.split(' ');
    let text2 = String(array);
    let array2 = text2.split('|');
    let text3 = String(array2);
    let array3 = text3.split(',');
    let health = 100;
    let gold = 0;
    let roomCounter = 0;
    let isWon = true;
    for (let i = 0; i < array3.length; i += 2) {
        roomCounter++;
        let word = array3[i];
        let value = Number(array3[i + 1]);
        if (word === "potion") {
            if (health + value > 100) {
                value = 100 - health;
            }
            health += value;
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (word === "chest") {
            gold += value;
            console.log(`You found ${value} coins.`);
        } else {
            health -= value;
            if (health < 1) {
                console.log(`You died! Killed by ${word}.`);
                console.log(`Best room: ${roomCounter}`);
                isWon = false;
                break;
            } else {
                console.log(`You slayed ${word}.`);
            }
        }
    }
    if (isWon) {
        console.log(`You've made it!`);
        console.log(`Coins: ${gold}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);