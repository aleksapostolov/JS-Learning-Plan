function palindrome(input){

    for (let el of input){
        let current = String(el);
        let reversed = String(el).split('').reverse().join(''); // split превръща от стринг на масив, обръщаме масива с reverse и с join обръщаме обратно на стринг;

        if (current === reversed){
            console.log('true');
        } else {
            console.log('false')
        }
    }
}
palindrome([123,323,421,121]);
palindrome([32,2,232,1010]);