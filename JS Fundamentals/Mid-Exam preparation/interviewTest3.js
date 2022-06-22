function interviewTest(){

    let a = 5;
    let b = 10;
    
    a = a + b;
    b = a - b;
    a = a - b
    console.log(`a: ${a}`)
    console.log(`b: ${b}`)
}
interviewTest();

function interviewTest2(){

    let a = 'asdasd';
    let b = 'dsadsa';
    
    [a,b]=[b,a];
    console.log(`a: ${a}`)
    console.log(`b: ${b}`)
}
interviewTest2();

