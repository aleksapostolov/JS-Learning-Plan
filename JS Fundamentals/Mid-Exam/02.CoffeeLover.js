function coffeeLover(arr){
    let coffeeList = arr.shift().split(' ');
    let numberOfCommands = Number(arr.shift());
    
    for (let i = 0; i < numberOfCommands; i++){

        let line = arr[i].split(" ");
        let command = line[0];
        
        switch (command) {
            case 'Include':
                let coffeeDrink = line[1];
                coffeeList.push(coffeeDrink);

                break;

            case 'Remove':
                let positionAt = line[1];
                let drinksToRemove = line[2];
                if (positionAt == "first") {
                    coffeeList.splice(0, drinksToRemove);
                    } else {
                        coffeeList.splice(-drinksToRemove);
                    }
                    if (coffeeList.length <= drinksToRemove) {
                         break;
                    }

                break;

            case "Prefer":
                let firstIndex = line[1];
                let secondIndex = line[2];
                if((firstIndex >= 0 && firstIndex <= coffeeList.length) && (secondIndex >= 0 && secondIndex <= coffeeList.length)){
                    let tempIndex = coffeeList[firstIndex];
                    coffeeList[firstIndex] = coffeeList[secondIndex];
                    coffeeList[secondIndex] = tempIndex;
                }
                break;

            case "Reverse":
                coffeeList = coffeeList.reverse();
                break;

        }
        
    }
    console.log(`Coffees:\n${coffeeList.join(" ")}`)
}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee","5","Include TurkishCoffee","Remove first 2","Remove last 1","Prefer 3 1","Reverse"]);
console.log('------------------------------')
coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee","5","Include OrdinaryCoffee","Remove first 1","Prefer 0 1","Prefer 3 1","Reverse"]);
console.log('------------------------------')
coffeeLover((["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica","3","Include OrdinaryCoffee","Remove first 1","Prefer 4 1"]));