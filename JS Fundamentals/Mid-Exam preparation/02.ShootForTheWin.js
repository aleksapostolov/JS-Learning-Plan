function shootForTheWin(arr){
    let targets = arr.shift().split(' ').map(Number);
    let index = 0;
    let command = arr[index];
    index++;
    let maxIndex = targets.length - 1;
 
    let counter = 0;
 
 
    while (command !== 'End'){
       let indexToBeShot = Number(command);
       let currentNum = targets[indexToBeShot];
       if (indexToBeShot <= maxIndex && indexToBeShot >= 0){
           targets[indexToBeShot] = -1;
           for (let i = 0; i < targets.length; i++){
               if (currentNum >= targets[i]){
                   if (targets[i] == -1){
                       continue;
                   }
                targets[i] += currentNum;
 
               } else {
                   if (targets[i] == -1){
                       continue;;
                   }
                targets[i] -= currentNum;
 
               }
           }
    }
    command = arr[index];
    index++;
    }
    for (let el of targets){
        if (el == -1){
            counter++;
        }
    }
    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`)
}