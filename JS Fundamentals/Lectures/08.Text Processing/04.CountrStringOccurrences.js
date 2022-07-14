function stringOccurrences(str, word){

    let textArr = str.split(' ');
    /* let count = textArr.filter(x=> x===word).length;
    console.log(count) */

    let counter = 0;
    for (let el of textArr){
        if (el === word){
            counter++
        }
    }
    console.log(counter)
    
}
stringOccurrences('This is a word and it also is a sentence','is');
stringOccurrences('softuni is great place for learning new programming languages','softuni');