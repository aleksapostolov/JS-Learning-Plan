function encryptPassword(arr){

    let num = arr.shift();
    let pattern = /(?<startingSymbols>\S{1,})>(?<numbers>[0-9]{3})\|(?<lowerCase>[a-z]{3})\|(?<upperCase>[A-Z]{3})\|(?<symbols>[\S]{3})<\1/g;
   

    for (let i = 0; i < num; i++) {
        
        let isValid = pattern.exec(arr[i]);
        
        

        if (!isValid){
            console.log('Try another password!')
        } else if (isValid) {

            let numbers = isValid[2];
            let lowerCase = isValid[3];
            let upperCase = isValid[4];
            let symbols = isValid[5];

            console.log(`Password: ${numbers + lowerCase + upperCase + symbols}`)
            
        } else {
            break;
        }
        

    }

}
encryptPassword(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])
;
console.log('-------------')
encryptPassword(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])
; 