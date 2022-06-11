function SumOfOddNumebrs(n){

    let sum = 0;
    let counter = 0;
    let i = 0;

    while (i <= 100){
    
    

        if(i % 2 != 0){
            console.log(i)
            counter++
            sum+=i;
        }
           
        
        i++

        if(counter === n){
            break;
        }


    }
    console.log(`Sum: ${sum}`);
    
}
SumOfOddNumebrs(5);