function objectCreator(fn, ln, a){ //параметри зададени в инпута

    let person = {
        firstName: fn, // за разлика от масивите, тук именоваме всеки елемeнт от обекта, 
                       // за да го достъпим по-нататък в кода
        lastName: ln,
        age: a
    }
    return person

}

objectCreator("Peter", "Pan", 20)