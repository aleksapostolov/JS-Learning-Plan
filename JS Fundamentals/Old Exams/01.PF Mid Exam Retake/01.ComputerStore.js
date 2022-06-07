function computerStore(array) {

    let price = 0;
    let tax = 0;
    let totalPrice = 0;
    
    

    while (array !== 'regular' || array !== 'special') {
        
        for (let index = 0; index < array.length; index++) {
            price += array[index]
            
        }
    
    } 
    console.log(price)
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
/* computerStore([  "1023",  "15",  "-20", "-5.50",  "450",  "20",  "17.66",  "19.30",  "regular",]);
computerStore(["regular"]); */
