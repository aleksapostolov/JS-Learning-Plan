function partyTime(array){

    let guestList = { // създаваме един обект, в който имаме два масива
        vip: [], // един ключ със СТОЙНОСТ масив за вип гостите
        regular: [] //и един ключ със СТОЙНОСТ за нормалните гости
    };

    // след това правим проверки пълним масивите

    let guest = array.shift() // взимаме първия елемент
        while (guest !== 'PARTY'){ //въртим до получаване на комaнда party

            let firstCh = guest[0] //взимаме първия знак от всеки гост, за да можем да проверим дали е буква или цифра
            if (isNaN(firstCh)){   //isNaN проверява дали символа е число
                guestList.regular.push(guest) // ако е число, го слагаме в листа с regular гостите
            } else {
                guestList.vip.push(guest)
            }
            guest = array.shift() //минаваме на следващ елемнет в array, 
            // като накрая (след получаване на команда party, ще в array ще останат само гостите, които ще идват)
        }

        for (let guest of array){ //обикаляме гостите, които започват да идват
            if (guestList.vip.includes(guest)){ //проверяваме дали във vip листа (който сме направили да е масив), се съдържа даденото име
                let index = guestList.vip.indexOf(guest); // намираме индекса, 
                guestList.vip.splice(index, 1); // за да може да махнем името на vip госта от листа с очаквани гости, понеже той вече е дошъл
            } else if (guestList.regular.includes(guest)){ //проверяваме дали във regular листа (който сме направили да е масив), се съдържа даденото име
                let index = guestList.regular.indexOf(guest); // намираме индекса, 
                guestList.regular.splice(index, 1); // за да може да махнем името на regular госта от листа с очаквани гости, понеже той вече е дошъл
            }
        }

        let vipCount = guestList.vip.length //проверяваме броя на гостите в масива на vip гостите
        let regularCount = guestList.regular.length //проверяваме броя на гостите в масива на regular гостите

        console.log(vipCount + regularCount);
        console.log(guestList.vip.join('\n')); //принтираме ги така, защото имаме масиви в обекта
        console.log(guestList.regular.join('\n'));
}
partyTime(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE','SVQXQCbc','tSzE5t0p','PARTY','9NoBUajQ','Ce8vwPmE','SVQXQCbc']);
partyTime(['m8rfQBvl','fc1oZCE0','UgffRkOn','7ugX7bm0','9CQBGUeJ','2FQZT3uC','dziNz78I','mdSGyQCJ','LjcVpmDL','fPXNHpm1','HTTbwRmM','B5yTkMQi','8N0FThqG','xys2FYzn','MDzcM9ZK','PARTY','2FQZT3uC','dziNz78I','mdSGyQCJ','LjcVpmDL','fPXNHpm1','HTTbwRmM','B5yTkMQi','8N0FThqG','m8rfQBvl','fc1oZCE0','UgffRkOn','7ugX7bm0','9CQBGUeJ']);