function destionationMapper(data){

    let pattern = /([=|/])(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/g;
    let points = 0;
    let valid;
    let destinations = [];

    while ((valid = pattern.exec(data))){
        
        points += valid.groups.destination.length;
        destinations.push(valid.groups.destination)
    }
    
    console.log(`Destinations: ${destinations.join(', ')}`)
    console.log(`Travel Points: ${points}`)
}
destionationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destionationMapper("ThisIs some InvalidInput");