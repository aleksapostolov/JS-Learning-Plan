// !!!!!!!!
// we convert object into JSON string using: 
// JSON.stringify(obj);


// как се създава обект по възможно най-лесния начин:
function objToJSON(name, lastName, hairColor){

    let obj = {
        name,
        lastName,      // JS директно си ги хваща всички неща, не е нужно да пиша нищо друго
        hairColor
    }

    let string = JSON.stringify(obj)
    console.log(string)

}
objToJSON('George', 'Jones', 'Brown');
objToJSON('Peter', 'Smith', 'Blond');