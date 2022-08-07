function adAstra(arr){

    let regex = /(\#|\|)(?<food>[A-Za-z\s]+)\1(?<exp>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g

    let allMatches = []

    let totalCalories = 0; 
    let caloriesPerDayNeeded = 2000;

    let match = regex.exec(arr);

    while(match !== null){
        let food = match.groups['food'];
        let exp = match.groups['exp'];
        let calories = match.groups['calories'];
        calories = Number(calories);

        totalCalories += calories;
        allMatches.push(`Item: ${food}, Best before: ${exp}, Nutrition: ${calories}`)

        match = regex.exec(arr);
    }

    let daysWithFood = Math.floor(totalCalories / caloriesPerDayNeeded);

    console.log(`You have food to last you for: ${daysWithFood} days!`);
    for (let el of allMatches){
        console.log(el);
    }

}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log('-------------')
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log('-------------')
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);