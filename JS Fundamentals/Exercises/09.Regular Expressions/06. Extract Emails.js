function extractEmails(input){

    let regex = /(?<!\S)[a-zA-Z0-9]+([\.\-\_]*[A-Za-z0-9]+)*@[a-zA-Z]+([\.\-]*[A-Za-z0-9]+)*(\.[A-Za-z0-9]+)/g
    let result = input.match(regex)

    for (let line of result){
        console.log(line)
    }
}
extractEmails("Please contact us at: support@github.com.");
extractEmails("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.")
extractEmails("Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.")
