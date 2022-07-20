function solve(){
    let pattern = /[a-z]/ //regex може да се използва с литерал(pattern) wrap-нат в два слаша
    let regExp = new RegExp('[a-z]', '') //използване с конструктор - може да приеме две стойности (pattern, flag)
}
solve();


function solve2() {
    let text = '2015-05-11'
    let pattern = /\d{4}-\d{2}-\d{2}/

    console.log(pattern.test(text))
}
solve2();

function match(){

    let text1 = 'Spicy jalapeno bacon ipsum dolor amet 123 kielbasa spare 321 ribs turducken t-bone prosciutto tail hamburger filet mignon. Frankfurter boudin pork loin buffalo.'
    let pattern = /\d+/g //добавяме g, за глобален флаг (търси съвпадения в целия текст)
    let matches = text1.match(pattern)

    for(let r of matches){

    console.log(r)
}
}
match();

function exec(){

    let text1 = 'Spicy jalapeno bacon ipsum dolor amet 123s kielbasa spare 321s ribs turducken t-bone prosciutto tail hamburger filet mignon. Frankfurter boudin pork loin buffalo.'
    let pattern = /(\d+)(s)/g //добавяме g, за глобален флаг (търси съвпадения в целия текст)
    let matches = pattern.exec(text1)

    console.table(matches)
}

exec();

function replace (){

}
replace();