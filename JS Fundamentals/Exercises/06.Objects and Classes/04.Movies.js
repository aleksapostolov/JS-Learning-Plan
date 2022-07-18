function movies(inputArray){

    let movies = [];

    inputArray.forEach((el)=>{ //минава през всеки елемент в масива 
        
        if(el.includes("addMovie")){  // и търси дали някой съдържа определена дума
                let movie = el.replace('addMovie ','') // ако израза го има, го махаме
                movies.push({name:movie}) //и го пушваме в масива, но като обект
        } else if (el.includes("directedBy")){
                let movieInfo = el.split(' directedBy ') // сплитваме го по ' directedBy ', за да получим от двете страни само каквото ни трябва
                let name = movieInfo[0];
                let director = movieInfo[1];
                // горните 3 реда могат да се напишат и доста по-съкратено
                // let [name,director] = el.split(' directedBy ')
                 movies.forEach(movie => {
                    if(movie.name === name){
                    movie.director = director;
                    }
                })
        } else if (el.includes("onDate")){
                let [name,date] = el.split(' onDate ');
                movies.forEach(movie => {
                    if(movie.name === name){
                        movie.date = date;
                    }
                })
        }        
    })

    movies.forEach(movie => {
        if(movie.name && movie.director && movie.date){  //проверяваме дали съдържа и трите елемента
            console.log(JSON.stringify(movie));
        }
    })
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ])