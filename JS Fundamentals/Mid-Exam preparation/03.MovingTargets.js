function movingTargets(arr){
    
    let targetsArray = arr.shift().split(' ');
    let index = 0;
    let command = arr[index];
    index++;

    while(command !== 'End'){
        
        
        let newArr = command.split(' ');
        let operation = newArr[0];
        let atIndex = Number(newArr[1]);
        let value = Number(newArr[2]);

        switch (operation) {
            case 'Shoot': // намаляме стойност на елемент от даден индекс
                if (targetsArray.includes(targetsArray[atIndex])) {
                    targetsArray[atIndex] -= value
                    if(targetsArray[atIndex] <= 0){
                        targetsArray.splice(targetsArray[atIndex] +1, 1)
                    }
                }
                break;
        
            case 'Add': // добавяне на стойност на даден индекс, без да се премахва друга
                if (targetsArray.includes(targetsArray[atIndex])) {
                    targetsArray.splice(atIndex, 0, value) 
                } else {
                    console.log("Invalid placement!")
                }
                break;
                    
            case 'Strike':
                    /* targetsArray.splice(atIndex , Number(value) + Number(value));
                    targetsArray.splice(atIndex - Number(value) , Number(value)); */
                    if(atIndex + Number(value) > targetsArray.length- 1 || atIndex - Number(value) < 0){
                        console.log(`Strike missed!`) 
                    } else {
                        /* targetsArray.splice(atIndex - value, value * 2 + 1 ) */
                        targetsArray.splice(atIndex , value + value);
                    targetsArray.splice(atIndex - value , value);
                    }  
                   
                
                break;
            
        }
        
        command = arr[index];
        index++;

    }
    console.log(targetsArray.join('|'))
}
movingTargets(["52 74 23 44 96 110","Shoot 5 10","Shoot 1 80","Strike 2 1","Add 22 3","End"]);
console.log('-----------------------')
movingTargets(["1 2 3 4 5","Strike 0 1","End"]);