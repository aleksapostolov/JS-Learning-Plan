function reverseInPlace(arr){

   /*  let buff = "";

    for (let i = arr.length - 1; i >= 0; i--) {
        buff += arr[i];
        buff += " "
        
    }
    console.log(buff) */

    let k = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++, k--) {
        let temp = arr[i];
        arr[i] = arr[k]
        arr[k] = temp
       
    }
    console.log(arr.join(" "))
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
reverseInPlace(['33', '123', '0', 'dd'])