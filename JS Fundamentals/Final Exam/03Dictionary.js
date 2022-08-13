function dictionary(arr){

    let dictionary = arr.shift().split('| ');
    let testWords = arr.shift().split(' | ');
    let command = arr.shift();
    let result = [];

    let myDictionary = {};

    for (let el of dictionary){
        let tokens = el.split(': ')
        let word = tokens[0]
        let definition = tokens[1]

        if (!myDictionary.hasOwnProperty(word)){
            myDictionary[word] = [];
            myDictionary[word].push(definition);
        } else if (myDictionary.hasOwnProperty(word)) {
            myDictionary[word].push(definition)
        }

    }

    
    if (command === 'Hand Over'){
        for (let key of Object.keys(myDictionary)){
        result.push(key);     
        } 
    console.log(result.join(' ')) 
    }

        
    if (command === 'Test'){

        for (let word of testWords){

            if (myDictionary.hasOwnProperty(word)){
                console.log(`${word}:`)

                for (let value of Object.values(myDictionary[word])){
                    
                    console.log(` -${value}`)
                
                }
            }  else if (!myDictionary.hasOwnProperty(word)){
                continue
            }
                   
        }
                
    }
        
}
    

/* dictionary(["programmer: an animal, which turns coffee into code | developer: a magician",
"fish | domino",
"Hand Over"])
; */
console.log('-------------');
dictionary(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
"care | kitchen | flower",
"Test"])
;
console.log('-------------');
dictionary (["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
"bit | code | tackle",
"Test"])
; 
