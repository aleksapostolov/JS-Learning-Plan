function sumOfTwoNumbers(firstNumber,secondNumber){

    let sum = firstNumber + secondNumber
    return sum;  /* return връща резултат от функцията, но не печата на конзолата !!!Каквото и да слагаме с return трябва да е на СЪЩИЯ РЕД!!!  */

}
console.log(sumOfTwoNumbers(10,20))
console.log(sumOfTwoNumbers(100,200))
console.log(sumOfTwoNumbers(1,2))
console.log(sumOfTwoNumbers(10,200))

/*  */

let sumOfTwoNumbersTwo = function(first, second) {  /* function expression - за hoisting (използване на функция преди нейното създаване)*/
    return first + second;
};
console.log(sumOfTwoNumbersTwo(5,10))


/* */

function demo(){  /* пример за function expression и hoisting */

   console.log(sumOfTwoNumbersThree(20,50));
       function sumOfTwoNumbersThree(first,second){
           return first + second;
       }
   } 

demo()

/* */

function demoTwo(){  /* пример за function expression с arrow function */

   let sumOfTwoNumbersThree = (first, second) => {
        return first + second;
       };
       console.log(sumOfTwoNumbersThree(5,10));
   } 

demoTwo()

/* */

