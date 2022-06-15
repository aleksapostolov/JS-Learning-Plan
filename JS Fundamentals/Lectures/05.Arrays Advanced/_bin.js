// Includes

let myArray = [10,20,30,40,50,60,70];

console.log(myIncludes(myArray,20));
console.log(myIncludes(myArray,-20));

function myIncludes(arr, value){
    
    for(let el of arr){
        if (el === value){
            return true;
        }
    }
    return false; 
    // връщаме false след като превъртим целия масив и не сме 
    //намерили true. Ако го сложим на else и първия елемент още
    //е различен ще получим директно fasle;
}

// IndexOf

console.log(myIndexOf(myArray, 40));
console.log(myIndexOf(myArray, -100));

function myIndexOf(arr, value){
    for (let i = 0; i < arr
         
        .length; i++) {
        if (arr[i] === value){
            return i
        }
    }

    return -1
}

// Slice

let res = mySlicer(myArray, 2, 4); // м/у 2 и 4
let res2 = myArray.slice(2) // от 2 до края
let res3 = myArray.slice(-4) // от 4 елемента от края
let res4 = myArray.slice(-4, -2) // от 2 елемента от четвъртия от края
console.log(res);
console.log(res2);
console.log(res3);
console.log(res4);
function mySlicer(arr,startIndex ,endIndex){
    let result = [];

    if (startIndex && endIndex){
        for(let i = startIndex; i < endIndex; i++){
            result.push(arr[i])
        }
    } else if (!startIndex && !endIndex){
        for(let el of arr){
            result.push(el)
        }
    } else if (startIndex && !endIndex){
        for (let i = startIndex; i < array.length; i++) {
            result.push(arr[i]);
            
        }
    }
    return result;
}

//Splice  (2(Index за начало),3 (count колко елеметна от индекса да вземе)) 
//Ако няма други стойности след count играе функцията на delete. 
//Ако има сотйности след count показва след кой индекс колко елемента да добави!

function mySplice(arr, value){

}

// Map  - създава нов масив като добавя функция на всеки елемент

function myMap(){
    let myArray1 = ['one','two','three','four'];
    let myArray2 = ['1','2','3','4'];
    
    let lengths = myArray1.map(x => x.length);
    let lengths2 = myArray2.map(Number);
    console.log(lengths)
    console.log(lengths2)
}
myMap();

// Filter - Създава нов масив от елементите, които отговарят на предикцията redicate

function myFilter(){
    let myArrFilter = [1,2,3,4,5,6,7];
    let filterLengths = myArrFilter.filter(x=> x>2);
    console.log(filterLengths);
}
myFilter();

// Sorting - връща 3 стойности - равни на 0, по-малки от 0 и по-големи от нула

function mySort(){
    let names = ["Peter", "George", "Mary"]; // default подрежда по азбучен ред
    let numbers = [20,40,10,30,100,5]; // непредвидено поведение - подреждане по първия 
    //елемент на числата. Използва се compare function за числа;

    console.log(numbers.sort((a,b)=> a - b));
    
}
mySort();