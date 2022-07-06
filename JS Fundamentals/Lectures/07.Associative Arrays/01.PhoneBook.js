function phoneBook(data){
// няма нужда да правим проверка за дублиращи се стойности,
// тъй като в обекта не може да има два ключа с едно и също име,
// за това, ако получим нова стойност за същия ключ тя се презаписва автоматично
    let phonebooks = {};

    for (let line of data){
        let tokens = line.split(' ');
        let name = tokens[0];
        let phoneNumber = tokens[1];
        phonebooks[name] = phoneNumber
        
    }
    
    for (let key in phonebooks){
        console.log(key, "->", phonebooks[key])
    }
}
phoneBook(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344']);
console.log('-------------')
phoneBook(['George 0552554','Peter 087587','George 0453112','Bill 0845344']);