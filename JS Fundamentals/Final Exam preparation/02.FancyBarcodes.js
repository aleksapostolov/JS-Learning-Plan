function fancyBarcodes(arr){

    let pattern = /(@#{1,})(?<password>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;
    let groupNumber = [];
    let match = pattern.exec(arr)

    while (match !== null){

        let foods = match.groups.password
        for (let el of foods){
            

            if (!isNaN(el)){
                groupNumber.push(el)
            } 
            
        }
        console.log(groupNumber)
        
    }

}
fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
;
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
;