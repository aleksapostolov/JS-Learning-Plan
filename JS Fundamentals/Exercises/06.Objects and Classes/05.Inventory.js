function inventory(inputArray){

    //ще създадем масив от обектите
    let heroes = [];

    for (let heroInfo of inputArray){
        let [name, level, items] = heroInfo.split(' / ') //сплитваме масива, като просто използваме този синтаксис, за да вземем елемнтите в различни променливи
        // по-дългия вариант ще изглежда така:
        // let splittedElements = heroInfo.split(' / ')
        // let name = splittedElements[0]
        // let level = splittedElements[1]
        // let items = splittedElements[2]

        let currentHero = { //създаваме обекта и наливаме инфото от променливите вътре
            name: name,
            level: Number(level),
            items: items
        };
        heroes.push(currentHero); //пушваме обекта е масива
    }


    let sortedByLevel = heroes.sort((a,b) => {   // така ще СОРТИРАМЕ по level   
        return a.level - b.level;
    })

    
for (const hero of sortedByLevel){ //минаваме през всички елементи, за да ги изкараме накрая
    console.log(`Hero: ${hero.name}`)
    console.log(`level => ${hero.level}`)
    console.log(`items => ${hero.items}`)
}

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ])