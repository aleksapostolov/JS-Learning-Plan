function thePianist(data){

    let n = Number(data.shift());
    let store = {};
    for(let i = 0; i < n; i++){

        let [piece, composer, key] = data.shift().split('|');
        if(!store.hasOwnProperty(piece)){
            store[piece] = {};
        }
        store[piece][composer] = key;
    }
    
    let line = data.shift();
    while(line !== 'Stop'){
        let [action, piece, composer, key] = line.split('|');

        switch (key) {
            case 'Add':
                if(store.hasOwnProperty(piece)){
                    console.log(`${piece} is already in the collection!`);
                    break;
                }
                break;
            case 'Remove':
                
                break;
            
            case 'ChangeKey':
                
                
                break; 
        }
        line = data.shift();
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
    'Stop'
  ]
  );