function destinationMapper(str){

    let points = 0;
    let destinations = [];
    const regex = /([=\/])[A-Z][A-Za-z]{2,}\1/g;
    const found = str.match(regex)

    if (found){
    found.forEach((el,i) => {
        
        el = el.substring( 1, el.length - 1);
        points += el.length;
        destinations.push(el)
    });
}

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log('-------------')
destinationMapper("ThisIs some InvalidInput");