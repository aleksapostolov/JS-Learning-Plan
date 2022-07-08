function partyTime(data){

    let vip = new Set();
    let normal = new Set();

    let isParty = false;

    for(let line of data){
        if (line === 'PARTY'){
            isParty = true;
            continue;
        }

            if (!isParty){
                let firstChar = Number(line[0])
                if (isNaN(firstChar)){
                    normal.push(line);
                } else {
                    vip.push(line);
                }
        } else {
            if(isNaN(firstChar)){
                normal.delete(line);
            } else {
                vip.delete(line);
            }
        }
    }
    
    let size = vip.size + normal.size;
    console.log(size);

    for(let code of vip){
        console.log(`code\n`)
    }
    for(let code of normal){
        console.log(`code\n`)
    }
}
partyTime(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE','SVQXQCbc','tSzE5t0p','PARTY','9NoBUajQ','Ce8vwPmE','SVQXQCbc']);
partyTime(['m8rfQBvl','fc1oZCE0','UgffRkOn','7ugX7bm0','9CQBGUeJ','2FQZT3uC','dziNz78I','mdSGyQCJ','LjcVpmDL','fPXNHpm1','HTTbwRmM','B5yTkMQi','8N0FThqG','xys2FYzn','MDzcM9ZK','PARTY','2FQZT3uC','dziNz78I','mdSGyQCJ','LjcVpmDL','fPXNHpm1','HTTbwRmM','B5yTkMQi','8N0FThqG','m8rfQBvl','fc1oZCE0','UgffRkOn','7ugX7bm0','9CQBGUeJ']);