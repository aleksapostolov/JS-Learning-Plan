function encryptPassword(arr){
 
    let tries = arr.shift();
    const regExp = /(?<firstMatch>\S{1,})>(?<num>[0-9]{3})\|(?<low>[a-z]{3})\|(?<up>[A-Z]{3})\|(?<sym>[^\<\>]{3})<\1/g;
 

    for (let i = 0; i < tries; i++) {
        
        let match = regExp.exec(arr[i]);
 
        if (!match){
            console.log('Try another password!')
        } else {
        
            while (match !== null){
 
                let first = match[2];

                let second = match[3];

                let third = match[4];

                let fourth = match[5];
                
                console.log(`Password: ${first + second + third + fourth}`)
                match = regExp.exec(arr[i])

            }
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