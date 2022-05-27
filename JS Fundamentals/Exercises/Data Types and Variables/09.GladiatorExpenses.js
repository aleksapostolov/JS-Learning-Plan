function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;
    let lostFightsCounter = 0;
    let shieldBrakeCounter = 0;

    for(let currentFight = 1; currentFight <= lostFights; currentFight++){
        lostFightsCounter++;

        if (lostFightsCounter % 2 === 0) {
            expenses += helmetPrice;
        }

        if (lostFightsCounter % 3 === 0) {
            expenses+= swordPrice;
        }

        if (lostFightsCounter % 6 === 0) {
            expenses += shieldPrice;
            shieldBrakeCounter++;
            if (shieldBrakeCounter % 2 ===0) {
                expenses += armorPrice;
            }

        }
        

    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
