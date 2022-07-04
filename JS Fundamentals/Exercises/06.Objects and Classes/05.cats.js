// създаваме class "котка", за да можем после от него да създаваме обекти от този клас



function catCreator(arr){ //дава ни се под формата на масив

    class Cat {    //първо създаваме класа
        constructor(name, age){
            this.name = name,   //, са задължителни
            this.age = age,
            this.meow = () => {    //трябва да създадем и функция на самия клас
                console.log(`${name}, age ${age} says Meow`)
            } 
        }
    }
    
        let cats = []
    
    
        for (let currentString of arr) {
            let currentData = currentString.split(" ")
            let currentCat = new Cat(currentData[0], currentData[1]);
            cats.push(currentCat)
        }
    
        cats.forEach(c => c.meow())
    
        // .forEach е цикъл for:
        //      cats.forEach(c => c.meow())
        //              =
        //    for (let c of cats){
        //    c.meow()
        //    }
    
    }
    catCreator(['Mellow 2', 'Tom 5']);
    catCreator(['Candy 1', 'Poppy 3', 'Nyx 2'])