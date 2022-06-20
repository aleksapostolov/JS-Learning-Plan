function computerStore(input){
 
    let price = 0;
    let priceWithTax = 0;
    let priceWithoutTaxes = 0;
    let taxes = 0;
     
    let index = 0;
        let command = input[index];
        index++
       
        
        while (command !== "special" && command !== "regular"){
     
            price = Number(command);
     
     
            if (price < 0){
                console.log("Invalid price!");
            } else {
                priceWithoutTaxes += price
            }
            
                
                command = input[index];
                index++;
        }
     
        taxes = priceWithoutTaxes * 0.20
        priceWithTax = priceWithoutTaxes + taxes
     
            if (command === "special"){
            priceWithTax -= priceWithTax * 0.10
        }
     
        if (priceWithoutTaxes <= 0){
            console.log("Invalid order!")
            } else {    
                
        console.log("Congratulations you've just bought a new computer!")
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`)
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log(`-----------`)
        console.log(`Total price: ${priceWithTax.toFixed(2)}$`)
        }
    }
    computerStore(['1050','200','450','2','18.50','16.86','special']);
    console.log('___________________') 
    computerStore(['1023', '15', '-20','-5.50','450', '20', '17.66', '19.30', 'regular']);
    console.log("___________________")
    computerStore(['regular']);
     
     
    /* още едно решение
    function coputerStore(array) {
        let totalPriceBeforeTax = 0;
        let typeOfClient = array.pop()
        let tax = 0;
        for (let index = 0; index < array.length; index++) {
            const price = array[index];
            if (price >= 0) {
                totalPriceBeforeTax += parseFloat(price);
            } else {
                console.log("Invalid price!")
            }
        }
        tax += (totalPriceBeforeTax * 0.20);
        let afterTax = totalPriceBeforeTax + tax;
        if (totalPriceBeforeTax > 0) {
            if (typeOfClient == 'special') {
                afterTax *= 0.90;
            }
     
            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${totalPriceBeforeTax.toFixed(2)}$`);
            console.log(`Taxes: ${tax.toFixed(2)}$`);
            console.log(`-----------`);
            console.log(`Total price: ${afterTax.toFixed(2)}$`);
        } else if (totalPriceBeforeTax == 0) {
            console.log("Invalid order!")
        }
    }
    computerStore(['1050','200','450','2','18.50','16.86','special']);
    console.log('___________________') 
    computerStore(['1023', '15', '-20','-5.50','450', '20', '17.66', '19.30', 'regular']);
    console.log("___________________")
    computerStore(['regular']); */
     
     
     
     
    /* Another one:
     
    function computerStore(input) {
        let sumWithoutTaxes = 0;
        let typeOfCustomer;
        let isValidOrder = true;
     
        for (let i = 0; i < input.length; i++) {
            let command = input[i];
     
            if (command != 'special' && command != 'regular') {
                let partPrice = Number(command);
                if (partPrice < 0) {
                    console.log('Invalid price!');
                    continue;
                }
                sumWithoutTaxes += partPrice;
            } else {
                typeOfCustomer = command;
                break;
            }
        }
        if (sumWithoutTaxes == 0) {
            console.log('Invalid order!');
        } else {
            let taxes = sumWithoutTaxes * 0.20;
            let totalPrice = sumWithoutTaxes + taxes;
            if (typeOfCustomer == 'special') {
                totalPrice = totalPrice * 0.90;
            }
     
            console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${sumWithoutTaxes.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`);
        }
    }
    computerStore([
        '1050',
        '200',
        '450',
        '2',
        '18.50',
        '16.86',
        'special'
    ]); */