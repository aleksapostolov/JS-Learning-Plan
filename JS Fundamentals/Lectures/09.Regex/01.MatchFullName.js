function matchFullName (data){

    let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z][a-z]+/g;
    let match = pattern.exec(data);
    let result = [];
    while (match !== null){
        result.push(match[0])
        match = pattern.exec(data);
    }
    console.log(result.join(' '))
}
matchFullName('Ivan Ivanov, ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov');
