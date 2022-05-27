function intAndFloat (n1, n2, n3){

    let sum = n1 + n2 + n3;
   /*  let type 
    
    if (sum % 1 == 0){
        type = "Integer"        // Решение 1 
    } else {
        type = "Float"
    } */

   /*  let type = (sum % 1 == 0) ? "Integer" : "Float" */   // Решение 2 

   sum % 1 == 0 ? sum += " - Integer" : sum += " - Float" // Когато работим с числа може ==, защото ги сравняваме винаги по стойност
 
    console.log(sum)
    
}
intAndFloat(9, 100, 1.1)