function employees(input) {

    let listObject = {};

    for (const person of input) {
        
        listObject.name = person;
        listObject.number = person.length;
        console.log(`Name: ${listObject.name} -- Personal Number: ${listObject.number}`);
    }

    
}
employees(["Silas Butler",  "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
console.log('-------------')
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
