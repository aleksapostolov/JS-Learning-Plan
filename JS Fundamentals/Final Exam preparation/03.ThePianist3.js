function thePianist(arr){

    let num = arr.shift();
    let allPieces = {};

    for (let i = 0; i < num; i++){
        let token = arr.shift().split("|");
        let piece = token[0];
        let composer = token[1];
        let key = token[2];

        allPieces[piece] = [];
        allPieces[piece].push(composer);
        allPieces[piece].push(key);
    }

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "Stop"){
            break;
        }

        let tokens = arr[i].split("|");
        let command = tokens[0];
        let piece = tokens[1];

        if (command === "Add"){  // когато искаме да добавим нов ключ
            let composer = tokens[2];
            let key = tokens[3];
            if (!allPieces.hasOwnProperty(piece)){
                allPieces[piece] = [];
                allPieces[piece].push(composer);
                allPieces[piece].push(key);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        
        }
        
        if (command === "Remove"){
            if (allPieces.hasOwnProperty(piece)){
                delete allPieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
        
        if (command === "ChangeKey"){
            let new3Key = tokens[2];
            if (allPieces.hasOwnProperty(piece)){
                allPieces[piece][1] = new3Key
                console.log(`Changed the key of ${piece} to ${new3Key}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
    }

    for (let key of Object.keys(allPieces)) { // минаваме през всички останали елемeнти в обекта (които не са отпаднали, защото са били превзети)
        let piece = key;
        let composer = allPieces[key][0];
        let keyy = allPieces[key][1];
    console.log(`${piece} -> Composer: ${composer}, Key: ${keyy}`);
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
    'Stop']);

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