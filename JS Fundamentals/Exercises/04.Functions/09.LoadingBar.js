/* function loadingBar(number){

    let completed = '%'.repeat(number / 10);
    let incomplete = '.'.repeat(10 - completed.length);

    if (incomplete.length === 0){
        console.log('100% Complete!')
    } else {
        console.log(`${number}% [${completed}${incomplete}]`);
        console.log('Still loading...');
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100); */

function loadingBar(number){

    let completed = '%'.repeat(number / 10);
    let incomplete = '.'.repeat(10 - completed.length);

    if (incomplete.length === 0){
        console.log('100% Complete!')
    } else {
        console.log(`${number}% [${completed}${incomplete}]`);
        console.log('Still loading...');
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);0