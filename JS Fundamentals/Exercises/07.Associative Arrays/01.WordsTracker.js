function wordsTracker(data){

    let result = new Map(); // създаваме нов Map

    let words = data.shift().split(' ') // взимаме първия елемент със split По празно място
    for (let word of words){ // създаваме в резултата key value pairs (търсени двойки)
        result.set(word, 0)
    }

    for(let word of data){ // минаваме през останалата част от Input-а 
        if(result.has(word)){ // ако се съдържа в result взима старата стойност от ключа и я записва в OldValue
            let oldValue = result.get(word) // взимаме същата стойност записана в OldValue и я инкрементираме с 1 (позлва се като брояч)
            result.set(word, oldValue + 1);

            // може да заменим ред 12 и 13 с result[word]++
        }
    }
    
    let sortResult = Array.from(result.entries()).sort(([keyA, valueA], [keyB, valueB]) => { // превръщаме Map-а в масив по двойки, като сортираме по стойностите (B - A (от голямо към малко))
        return valueB - valueA;
    });
    
    for (let [key, value] of sortResult){ // циклим през сортирания масив и за всеки ключ получаваме стойността
        console.log(key, '-', value)
    }
}
wordsTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
console.log('-------------')
wordsTracker(['is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);