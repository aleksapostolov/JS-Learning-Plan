function addressBook(data){

    let result = {};

    for (let line of data){
        let [name, address] = line.split(':');
        result[name] = address;
    }
    
  /*   let entries = Object.entries(result);  //решение 1
    let sortedEntries = entries.sort(([keyA,valueA],[keyB,valueB]) => {
        return keyA.localeCompare(keyB)
    }) 
    
    for(let [name,address] of sortedEntries){
        console.log(name, '->', address)
    }*/

    let unsortedKey = Object.keys(result);  // решение 2
    let sortedKey = unsortedKey.sort((a,b)=> a.localeCompare(b))

    for(let key of sortedKey){
        console.log(key, '->', result[key])
    }
    
    
}
addressBook(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd']);
console.log('-------------')
addressBook(['Bob:Huxley Rd','John:Milwaukee Crossing','Peter:Fordem Ave','Bob:Redwing Ave','George:Mesta Crossing','Ted:Gateway Way','Bill:Gateway Way','John:Grover Rd','Peter:Huxley Rd','Jeff:Gateway Way','Jeff:Huxley Rd']);