function leapyear(year){

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log('yes')
    } else {
        console.log('no')
    }

}
leapyear(1984);
leapyear(2003);
leapyear(4);