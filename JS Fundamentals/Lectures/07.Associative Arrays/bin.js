function solve(data){

    let key = 'four' // дефинираме ключа тук (4)
    let myObj = {
        'one': 1,
        'two': 2,
        'three': 3,

        [key]: 4, //създаване на property и с квадратни скоби, като трябва да сме го дефинирали първо
    }

    /* console.log(myObj.four) //извикваме ключа с точка
    console.log(myObj['four']) // или с индексиращия оператор, но ЗАДЪЛЖИТЕЛНО КАТО STRING!!!
    console.log(myObj[key]) // или като ключ директно, за да вземе елемента */

    for(let key in myObj){ // обектите се циклят с for in,а не for of!!!
        console.log(key)// принтира ключа
        console.log(myObj[key]) // принтира стойността
        console.log(myObj) // принтира целия обект
    }
}
solve();