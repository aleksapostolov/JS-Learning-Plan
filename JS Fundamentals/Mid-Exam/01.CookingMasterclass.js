function cookingMasterclass(input){

    let budget = Number(input[0]);
    let students = Number(input[1]);
    let flourPrice = Number(input[2]);
    let eggPrice = Number(input[3]);
    let apronPrice = Number(input[4]);

    let totalExpenses = apronPrice * (students + Math.ceil(students * 0.2)) + eggPrice * 10 *
    students + flourPrice * (students - (Math.floor(students * 0.2)));

    if (totalExpenses <= budget) {
        console.log(`Items purchased for ${totalExpenses.toFixed(2)}$.`);
    } else {
        console.log(`${(totalExpenses - budget).toFixed(2)}$ more needed.`);

    }
}
cookingMasterclass([50,2,1.0,0.10,10.0]);
cookingMasterclass([100,25,4.0,1.0,6.0]);
cookingMasterclass([946,20,12.05,0.42,27.89]);