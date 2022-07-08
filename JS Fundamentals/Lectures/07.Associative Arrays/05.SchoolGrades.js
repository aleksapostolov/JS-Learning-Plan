function schoolGRades(array){

    let finalResult = new Map();

for (let lineInfo of array){
    let elements = lineInfo.split(" ");
    let name = elements.shift();
    let startingGrades = elements;

 if (finalResult.has(name)) { // проверяваме дали името на студента вече го има и ако ГО ИМА:
        let oldGrades = finalResult.get(name) // ще върнем всички оценки, които имаме за дадения студент
        for(let grade of startingGrades){  // и към тях ще добавим оценките, които стоят зад повтарящото се име 
            oldGrades.push(grade) 
        } 
    } else {
        finalResult.set(name, startingGrades); //aко името го няма, просто вкарваме името и оценките под .map
    }
}
    
// сортираме:
let unsorted = Array.from(finalResult.entries()) //връща масив, в който се намират всияки двойки ключ и стойност (name + grade)
let sorted = unsorted.sort(([keyA], [keyB]) => { // сортирам ги 
    return keyA.localeCompare(keyB)
});

for (let [key, value] of sorted) {  // след като сме сортирали, записваме всеки елемент под пова променлива - "key" държи имената, а "value" държи всички оценки
    let sumGrade = 0;
    for (grade of value){ // минава през всички оценки, които сме записали под value и
        sumGrade += Number(grade) // смета сбора на всички оценки
    }

    let avgGrade = sumGrade / value.length // след това смятаме средната оценка
    console.log(`${key}: ${avgGrade.toFixed(2)}`);
}


}
schoolGRades([
'Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'
])


schoolGRades([
'Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'
])