function minerTask(input){

    let production = new Map();
    let arrLength = input.length;

    for(let i = 0; i < arrLength - 1; i+=2){
        let current = input[i];
        let quantity = Number(input[i + 1]);

        if(!production.has(current)){
            production.set(current,0);
        }
        let updatedQuantity = production.get(current);
        updatedQuantity += quantity;
        production.set(current, updatedQuantity);
    }
    
    for (let item of production){
        console.log(item.join(' -> '));
    }
}
minerTask(['Gold','155','Silver','10','Copper','17']);
minerTask(['gold','155','silver','10','copper','17','gold','15']);