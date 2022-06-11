function mathPower(number, power){

   /*  result = Math.pow(number, power);
    console.log (result) */

    //a**b също степенува

    let result = 1;
    for (let i = 0; i < power; i++) {
        
        result = result * number;
    }

    console.log(result);
}
mathPower(2,8);
mathPower(3,4);