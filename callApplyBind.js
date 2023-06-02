// Call, Apply and Bind
const myInfo = {
    name:"Yajindra",
    lastname:"Gatuam",
    desugnation:"Software Developer",
 
}

let printFullName = function(){
    console.log(this.name + " "+ this.lastname);
}

printFullName.call(myInfo);

// 1) call() - function borrowing - helps to call methods from other obj methods
let myInfo1 = {
    name:"Ukesh",
    lastname:"Chand",
}
printFullName.call(myInfo1);

// 2) apply() - call and apply have similar user case except apply pass paramater in an array
printFullName.apply(myInfo1);

// 3) bind - bind returns a  function
let printMyName = printFullName.bind(myInfo);
console.log(printMyName);
printMyName();