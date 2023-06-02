// Closure ->

function funct(a){
    console.log('Live viewrs ', a);
    var b = 2;
    return function (c){
        return a + b + c;
    }
}

let store = funct(5)
console.log('Checking stores',store(2));