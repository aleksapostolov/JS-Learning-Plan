function arrayManipulator(nums, commands){

    for (let i = 0; i < commands.length; i++) {
        let currentValues = commands[i].split(' ');
        let currentCommand = currentValues.shift();
        currentValues = currentValues.map(Number);

        let sumPairs = 0;
        let pairsOfSumNums = [];

        switch (currentCommand) {
            case 'add':
                let indexToAdd = currentValues[0];
                let elementToAdd = currentValues[1];
                nums.splice(indexToAdd, 0 ,elementToAdd)
                break;
            case 'addMany':
                let indexToAddMany = currentValues.shift();
               
                nums.splice(indexToAddMany, 0, ...currentValues) // spread operator с '...' пренасяме стойностите от един масив в друг
                break;
            case 'contains':
                console.log(nums.indexOf(currentValues[0]));
                break;

            case 'remove':
                let indexToRemove = currentValues[0];
                nums.splice(indexToRemove,1);
                break;    
                    
            case 'shift':
                for(let i = 0; i < currentValues[0]; i++){
                    nums.push(nums.shift()); // взимаме от началото всеки последователен елемент и го местим най-отрзад
                }
                break;

            case 'sumPairs':
                if(nums.length % 2 !== 0){
                    nums.push(0);
                } 
                for(let i = 0; i < nums.length; i+=2){
                    sumPairs = nums[i] + nums[i+1];
                    pairsOfSumNums.push(sumPairs);
                } 
                nums = [...pairsOfSumNums]; // равен на нов масив от взетите стойности от pairsOfSumNums
                break;
            case 'print':
                console.log(`[${nums.join(' , ')}]`)
                break;
            default:
                break;
        }
       
        
    }
    console.log(nums)
}
arrayManipulator([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5],['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);