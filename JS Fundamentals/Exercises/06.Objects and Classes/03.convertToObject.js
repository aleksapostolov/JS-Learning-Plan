// !!!!!!!!
// from JSON string we can create object using:
// JSON.parse(text)

function parsingJson(text){

    let obj = JSON.parse(text)

    let objEntries = Object.entries(obj) //с .entries взимаме двойка елементи - tuple
    for (const [key, value] /* tuple */ of objEntries) {
        console.log(`${key}: ${value}`)
    }


}
parsingJson('{"name": "George", "age": 40, "town": "Sofia"}')
parsingJson('{"name": "Peter", "age": 35, "town": "Plovdiv"}')