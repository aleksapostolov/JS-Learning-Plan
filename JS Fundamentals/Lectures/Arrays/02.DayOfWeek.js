function dayOfWEek(day){

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    if (day >= 1 && day <= 7){

        console.log(days[day - 1]);
    } else {
        console.log("Invalid day!");
    }
}
dayOfWEek([3]);
dayOfWEek([6]);
dayOfWEek([11]);