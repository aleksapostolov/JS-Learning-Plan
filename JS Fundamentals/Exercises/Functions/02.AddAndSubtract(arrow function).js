function addAndSubtract(first, second, third){


    let sum = (first, second) => {
        return first + second;
    }

    let subtract = (sumFirstAndSecond, third) => {
        return sumFirstAndSecond - third;
    }
    
    let sumFirstAndSecond = sum(first, second);
    let finalResult = subtract(sumFirstAndSecond, third)
    console.log(finalResult);
};



addAndSubtract(23, 6 , 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);