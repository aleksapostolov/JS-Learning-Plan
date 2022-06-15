function sumFirstAndLastKNumber(numbers) {

    let k = numbers.shift();

    let firstK= numbers.slice(0,k);
    let lastK= numbers.slice(-k);

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
sumFirstAndLastKNumber([2, 7, 8, 9]);
sumFirstAndLastKNumber([3, 6, 7, 8, 9]);
