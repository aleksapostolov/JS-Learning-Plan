 function ForeignLanguages(country) {

    if(country === "England" || country === "USA"){
        console.log("English")
    } else if (country === "Spain" || country === "Argentina" || country === "Mexico"){
        console.log("Spanish");
    } else {
        console.log("unknown");
    }

}
ForeignLanguages("USA"); 
