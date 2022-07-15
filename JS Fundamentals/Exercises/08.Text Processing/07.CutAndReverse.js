function cutAndReverse(input){

    let reversed = input.split('').reverse().join('');
    let sliceOne = reversed.slice(reversed.length / 2);
    let sliceTwo = reversed.slice(0, reversed.length / 2)
    console.log(`${sliceOne}\n${sliceTwo}`)
    
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');