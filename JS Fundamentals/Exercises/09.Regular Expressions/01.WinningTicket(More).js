function winningTicket(input){

    let pattern = /(?<symbols>[#|$|^|@]){6,10}/g;
    let tickets = input.trim().split(", ")

    for (let el of tickets){
        
            let firstPart = el.substring(0, (el.length / 2))
            let secondPart = el.substring((el.length / 2), el.length)

            let combination1part = firstPart.pattern.match(patt)
            let combination2part = 
            console.log(secondPart)

        }
    }
    

winningTicket(`Cash$$$$$$Ca$$$$$$sh`);
console.log("____________")
winningTicket(`$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey`);
console.log("____________")
winningTicket(`validticketnomatch:(`);