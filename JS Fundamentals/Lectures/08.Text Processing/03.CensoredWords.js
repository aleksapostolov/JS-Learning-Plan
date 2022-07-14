function censored(text, word){

    while (text.indexOf(word) >= 0){ // става и  с while (text.includes(word))
        text = text.replace(word, '*'.repeat(word.length));
    }
    
    console.log(text)
}
censored('A small sentence with some words', 'small');
censored('Find the hidden word', 'hidden');