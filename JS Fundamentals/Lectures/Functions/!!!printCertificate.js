function printCertificate(grade, nameArr){

    printHeader();
    printName(nameArr);
    formattedGrade(grade)
        function printHeader() {
        printCertificate('~~~-   {@}   -~~~');
        printCertificate('~- Certificate -~');
        printCertificate('~~~-  ~---~  -~~~');
        }

        function printName(nameArr){
            console.log((nameArr[0] + '' + nameArr[1]))
        }
        function formatGrade(grade) {
            let desc;
            let formattedGrade = grade.toFixed(2);
          
            if (grade < 3.0) {
              desc = "Fail";
              formattedGrade = 2;
            } else if (grade >= 3.0 && grade < 3.5) {
              desc = "Poor";
            } else if (grade >= 3.5 && grade < 4.5) {
              desc = "Good";
            } else if (grade >= 4.5 && grade < 5.5) {
              desc = "Very Good";
            } else {
              desk = "Excellent";
            }
            console.log(`${desc} (${formattedGrade})`);
    }
}
printCertificate(5.25, ['Peter', 'Carter'])