function primerNumberChecker(num){

    let isPrime = true;

    if (num === 1){
        isPrime = false;
        console.log(`${isPrime}`)
        
    } else if (num > 1){

        for (let i = 2; i < num; i++) {
            if(num % i == 0){
                isPrime = false;
                console.log(`${isPrime}`)
                break;
            }
            
        }
        if(isPrime){
        console.log(`${isPrime}`);
    
    }
}
}
primerNumberChecker(7);
primerNumberChecker(8);
primerNumberChecker(81);