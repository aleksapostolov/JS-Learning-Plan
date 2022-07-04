function cityPrinter(obj){      //входа е директно обект


    //ако използваме метод tuple, при който елементите вървят по двойки 
       let cityEntries = Object.entries(obj);
       for (let [cityKey, cityValue] of cityEntries) { //казвам да раздаде първите два реда от обекта в два отделни елемнта, които да използвам
           console.log(`${cityKey} -> ${cityValue}`) // name -> Sofia
       }
   
   
   //ако използваме метод key, при който взимаме keys на елементите
   /*     function cityPrinter(obj){
       let cityKeys = Object.keys(obj)
       for (let key of cityKeys) {
           console.log(`${key} -> ${obj[key]}`)
       }
    */
   
       
   }
   cityPrinter({
       name: "Sofia",
       area: 492,
       population: 1238438,
       country: "Bulgaria",
       postCode: "1000"
   })