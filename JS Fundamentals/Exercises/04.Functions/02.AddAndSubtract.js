function addAndSubtract(first, second, third){

    let sumFirstAndSecond = sum(first, second);
    let finalResult = subtract(sumFirstAndSecond, third)

    console.log(finalResult);
    
    function sum(first, second){
        return first + second;
    }

    function subtract(sumFirstAndSecond, third){
        return sumFirstAndSecond - third;
    }

}
addAndSubtract(23, 6 , 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);