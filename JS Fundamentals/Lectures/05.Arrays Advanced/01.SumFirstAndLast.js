function sumFirstAndLast (array){

    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop());

    console.log(firstElement + lastElement);

}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);
