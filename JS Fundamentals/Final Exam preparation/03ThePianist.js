function thePianist(input){

    let myCollection = {};
    let numberOfPieces = Number(input.shift());
    
    for(let i = 0; i < numberOfPieces; i++){
        let tokens = input.shift().split('|');
        let piece = tokens[0];
        let composer = tokens[1];
        let key = tokens[2];

        if (!myCollection.hasOwnProperty(piece)){
            myCollection[piece] = [];
            myCollection[piece].push(composer);
            myCollection[piece].push(key);
        } 
        
    }

    for(let i = 0; i< input.length; i++){
        if (input[i] === "Stop"){
            break;
        }

        let commandLine = input[i].split('|')
        let commandToken = commandLine[0];
        
       

         if (commandToken === 'Add'){
            let piece = commandLine[1];
            let composer = commandLine[2];
            let key = commandLine[3];

            if (!myCollection.hasOwnProperty(piece)){
                myCollection[piece] = [];
                myCollection[piece].push(composer);
                myCollection[piece].push(key);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            } else {
                console.log(`${piece} is already in the collection!`)
            }

        }

        if (commandToken === 'Remove'){

            let piece = commandLine[1];

            if (myCollection.hasOwnProperty(piece)){
                delete myCollection[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        } 

        if (commandToken === 'ChangeKey') {
            let piece = commandLine[1];
            let newKey = commandLine[2];

            if (myCollection.hasOwnProperty(piece)){
                myCollection[piece][1] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
        
    
    } 

    for (let [key, values] of Object.entries(myCollection)){
        console.log(`${key} -> Composer: ${values[0]}, Key: ${values[1]}`)
    }

}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  );
    console.log('-------------')
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop']); 
