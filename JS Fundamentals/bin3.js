function schoolLibrary(arr) {
 
    let allBooks = arr.shift().split('&');
 
    for (let line of arr) { 
        let lineInfo = line.split(" | "); 
        let command = lineInfo.shift()
        let book = lineInfo[0]
 
        if (command === "Done"){
            break;
        }
 
        if (command === "Add Book"){
            if (!allBooks.includes(book)) {
                allBooks.unshift(book)
            }
 
        } 
        
        if (command === "Take Book"){
            if (allBooks.includes(book)) {
                allBooks = allBooks.filter(x => x !== book)
            }
        } 
        
        if (command === "Swap Books"){
            let book1 = lineInfo.shift();
            let book2 = lineInfo.shift();
            if (allBooks.includes(book1) && allBooks.includes(book2)) {
                firstIndex = allBooks.findIndex(x => x === book1)
                secondIndex = allBooks.findIndex(x => x === book2)
                allBooks[firstIndex] = book2
                allBooks[secondIndex] = book1
            }
        }
 
        if (command === "Insert Book"){
            allBooks.push(book)
        }
        
        if (command === "Check Book"){
            let index = Number(book)
            if (allBooks[index] !== undefined) {
                console.log(allBooks[index])
            }
        }
 
 
 
    }
    console.log(allBooks.join(", "))
 
}
 
 
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"])
 
console.log("________________")
 
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"]) 
 
console.log("________________")
 
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"])
 
console.log("________________")
 
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Done", "Check Book | 2", 
"Swap Books | Don Quixote | Ulysses",
])