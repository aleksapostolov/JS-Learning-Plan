function reverseAnArray(n, numbers){

    let result = [];
    
    for (let r = n - 1; r >= 0; r--) {
        result.push(numbers[r]) 
    }
    console.log(result.join(" "));
}
reverseAnArray(3, [10, 20, 30, 40, 50])
reverseAnArray(4, [-1, 20, 99, 5])
reverseAnArray(2, [66, 43, 75, 89, 47])