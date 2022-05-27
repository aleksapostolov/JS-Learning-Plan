function echoType(line){
    let type = typeof(line)
        if (type == 'string' || type == 'number'){
        console.log(type)
        console.log(line)
    } else {
        console.log(type)
        console.log("Parameter is not suitable for printing")
    }

}
echoType('Hello, JavaScript!');
