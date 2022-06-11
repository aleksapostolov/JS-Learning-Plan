function rounding (n,m){

    if (m > 15){
        m = 15;
    }

    let roundedNumber = n.toFixed(m) 
    console.log (parseFloat(roundedNumber));

}
rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);