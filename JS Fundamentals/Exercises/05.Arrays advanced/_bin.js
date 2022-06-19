function filter(){

    let arr = [1,2,3,4];
    let newArray = arr.map(el=> {
        if (el % 2 === 0){
            return el;
        }
    
    });
    console.log(`${newArray}`)
}
filter();

function sort(){
    let arr = [5,1,11,3,100];
    let sortedArray = arr.sort(function(a,b){ //слага се метода на сортиране, иначе 
        //default сортира по азбучен ред - 1,100,11,3,5...
        return a - b;
    });

    let arr2 = ['bb', 'a', 'ccc']
    let sortedArray2 = arr2.sort(function(a,b){
        return b.length - a.length; // може и return as.localCompare(b) 
    })


    console.log(`Sorted: ${sortedArray}`);
    console.log(`Sorted2: ${sortedArray2}`);

}
sort();
