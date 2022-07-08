/* function oddOccurrencese(data){

    let result = new Map();

    let words = data.split(' ');

    for(let word of words){
        word = word.toLowerCase(); //правим всички букви в думата малки
        if (result.has(word)){

            let oldValue = result.get(word);
            result.set(word, oldValue + 1)
        } else{
            result.set(word, 1);
        }
    }
    
    let filterResult = Array.from(result).filter(([key, value]) => {
        return value % 2 !== 0
    });

    let buffer = '';

    for (let [key, value] of filterResult){
        buffer += key + ' ';
    }

    console.log(buffer)
} */

function oddOccurrencese(data){

    let result = {};

    let words = data.split(' ');

    for(let word of words){
        word = word.toLowerCase(); //правим всички букви в думата малки
        if (!result[word]){
            result[word] =0;   
        } 

        let oldValue = result[word];
        result[word] = oldValue + 1;
                 
    }
    
    let filterResult = Object.entries(result).filter(([key, value]) => {
        return value % 2 !== 0
    });

    let buffer = '';

    for (let [key, value] of filterResult){
        buffer += key + ' ';
    }

    console.log(buffer)
}

oddOccurrencese('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrencese('Cake IS SWEET is Soft CAKE sweet Food');