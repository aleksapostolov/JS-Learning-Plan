function starEnigma(input){

    let messages = Number(input.shift()) // звимам броя на съобщенията

    let regex = /@([A-Z][a-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(A|D)![^@\-!:>]*->\d+/;
    let attacked = [];
    let destroyed = [];
    // search for: [s, t, a, r] 

    for (let i = 0; i < messages; i++){ // минавам през всеки отделен стринг в инпута
        let encryptedMessages = input[i]   
        
        let count = encryptedMessages.toLowerCase().split("").filter((char) => char === "s" || char === "t" || char === "a" || char === "r").length // правим всички букви, във всеки стринг, малки  ['stcdoghudd4=63333$d$0a53333']   
        // сплитваме, за да получа всяка буква ['s', 't', 'c', 'd', 'o', 'g', 'h', 'u', 'd', 'd', '4', '=', '6', '3', '3', '3', '3', '$', 'd', '$', '0', 'a', '5', '3', '3', '3', '3']
        // филтрираме, за да извадим сало буквите които търсим
        // и накрая с .length взимаме дължината на стринга, който сме получили

    let decryptedMessage = encryptedMessages.split("").map((c) => String.fromCharCode(c.charCodeAt(0) - count)).join("")
        // за всеки знак от стринга, взимаме числовата му равностойност от ASCII таблицата, 
        // вадим от нея count-a 
        // и след това обръщаме числото, в новия знак от ASCII таблицата

    let regexMatch = decryptedMessage.match(regex);
    if (regexMatch) { // проверяваме дали има regex match
        if (regexMatch[2] === "A"){ // и коя от двете букви има - "A" за attacked ИЛИ "D" за destroyed
            attacked.push(regexMatch[1]) // ако има, пушваме името на планетата (regexMatch[1] --- 'Alderaa') в масива attacked
        } else if (regexMatch[2] === "D"){
            destroyed.push(regexMatch[1]) // ако има, пушваме името на планетата в масива attacked
        }
    }
}

console.log(`Attacked planets: ${attacked.length}`);
Object.entries(attacked).sort((a,b) => a[1].localeCompare(b[1])).forEach((p) => console.log(`-> ${p[1]}`))
console.log(`Destroyed planets: ${destroyed.length}`);
Object.entries(destroyed).sort((a,b) => a[1].localeCompare(b[1])).forEach((p) => console.log(`-> ${p[1]}`))

}
starEnigma([
'2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR'])

starEnigma([
'3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR'])