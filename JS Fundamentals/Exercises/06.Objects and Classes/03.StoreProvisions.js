function storeProvisions(currentStocks, forDelivery){

    let storeProducts = {};

    let currentL = currentStocks.length;
    let forDeliveryL = forDelivery.length;

    for (let i = 0; i < currentL; i+= 2) {
        let product = currentStocks[i];
        storeProducts[product] = Number(currentStocks[i +1]);   
    }

    for (let i = 0; i < forDeliveryL; i+= 2) {
        let product = forDelivery[i];

        if(!storeProducts.hasOwnProperty(product)){
            storeProducts[product] = 0;
        }
        storeProducts[product] += Number(forDelivery[i +1]);
    }
    console.log(storeProducts);
}
storeProvisions(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
console.log('-------------')
storeProvisions(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);