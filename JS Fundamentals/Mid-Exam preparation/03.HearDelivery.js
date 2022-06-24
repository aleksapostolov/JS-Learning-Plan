function heartDelivery(arr){

    let firstLine = arr.shift().split('@');
    let nextLine = arr.shift();
    let total = 0;

    while(nextLine !== 'Love!'){
        let result = nextLine.split(' ') // тъй като командата е винаги Jump ...
        
        total += Number(result[1]);//...взимаме само в следващия ред цифровата стойност от този ред

        if(total > firstLine.length - 1){ // ако Купидон трябва да прескочи повече индекси от дължината на масива се връща на индекс 0 (първа къща)
            total = 0;
        }
        if(firstLine[total] === 0){ // проверка дали дадената къща е имала Св. Валентин (би била равна на 0)
            console.log(`Place ${total} already had Valentine's day.`)
        } else { // на всеки скок в къща, която има стойност различна от 0 намаляме с 2 единици стойността (виж долен ред)
            firstLine[total] = firstLine[total] - 2;
            if (firstLine[total] === 0){ // отново проверка дали след последната операция сме стигнали 0, за да принтираме условието
                console.log(`Place ${total} has Valentine's day.`)
            }
        }
        nextLine = arr.shift()
    }
    console.log(`Cupid's last position was ${total}.`)
    let resultArr = []; // създаваме нов масив... 
    let resultFlag = true;
    firstLine.forEach(element => {//... и проверяме за елементи различни от 0...
        if (element !== 0) {
            resultFlag = false;
            resultArr.push(element);//... като всеки различен от 0 елемент записваме в новият масив.
        }
    });
    if (resultFlag){
        console.log("Mission was successful.")
    } else {
        console.log(`Cupid has failed ${resultArr.length} places.`)// тук използваме дължината на новия масив (само елементи различни от 0)
    }
}
heartDelivery(["10@10@10@2","Jump 1","Jump 2","Love!"]);
heartDelivery(["2@4@2","Jump 2","Jump 2","Jump 8","Jump 3","Jump 1","Love!"]);