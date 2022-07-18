function cardGame(array){

    let players = new Map();
    
    let eNumCardPower = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11, 
        "Q": 12, 
        "K": 13, 
        "A": 14
    };
    
    let eNumCardType = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }
    
    for (let line of array){
        let tokens = line.split(": ");
        let name = tokens.shift();
        let deckString = tokens[0] //тук е стринг
        
        let deckArr = deckString.split(", ") // превръщаме в масив
    
            if(!players.has(name)){
                players.set(name, new Set());
            }
    
            for (let card of deckArr){
                players.get(name).add(card)
            }
        }
    
        for (let [key, value] of players){
            let sum = 0;
            for (let card of value){
                let cardInfo = card.split("");
                let cartType = cardInfo.pop(); // махаме последния елемнт и ого записваме под нова променлива, защото имаме вариант в който първото число е двуцифрено - 10
                let cardPower = cardInfo.join(""); //долепяме останалите числа на всеки ред едно до друго 1,0 -> 10
                
                let cardPowerAsNumber = eNumCardPower[cardPower];
                let cartTypeAsNumber = eNumCardType[cartType];
                sum += cardPowerAsNumber * cartTypeAsNumber  
            }
            console.log(`${key}: ${sum}`)
        }
    
    }
    cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);