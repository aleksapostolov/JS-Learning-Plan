function messagesManager(input){

    let allMessages = {};
    let counter = 0;

    let capacity = Number(input.shift())

    for (let i = 0; i < input.length; i++){
        let tokens = input[i].split('=')
        let command = tokens[0]

        if (command === "Statistics"){
            break;
        }

        if (command === "Add"){

            let username = tokens[1];
            let send = Number(tokens[2]);
            let received = Number(tokens[3]);

            if (!allMessages.hasOwnProperty(username)){
                allMessages[username] = [] 
                allMessages[username].push(send)
                allMessages[username].push(received)
            } 
        }

        if (command === "Message"){

            let sender = tokens[1];
            let receiver = tokens[2];

            if (allMessages.hasOwnProperty(sender) && allMessages.hasOwnProperty(receiver)){
                
                allMessages[sender][0] += 1;
                allMessages[receiver][1] += 1;

                let totalSenderMessages = allMessages[sender][0] + allMessages[sender][1];
                let totalReceiverMessages = allMessages[receiver][0] + allMessages[receiver][1];;

                if (totalSenderMessages >= capacity){
                    console.log(`${sender} reached the capacity!`)
                    delete allMessages[sender];
                }

                if (totalReceiverMessages >= capacity){
                    console.log(`${receiver} reached the capacity!`)
                    delete allMessages[receiver];
                }
            }
        }

        if (command === "Empty"){
            let username = tokens[1];

            if (allMessages.hasOwnProperty(username)){
                delete allMessages[username]
            } else if (username === 'All'){
                allMessages = {};
            }
        }

    }

    for (let key in allMessages){
        counter++;
    }

    console.log(`Users count: ${counter}`);

    for (let [key,value] of Object.entries(allMessages)){
        console.log(`${key} - ${Number(value[0]) + Number(value[1])}`);
    } 
}




messagesManager([
"10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"]);

messagesManager(([
"20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"]));

messagesManager(([
    "12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"]));