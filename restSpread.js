(function(){
    console.log('Hi Yajindra');
})();

// Rest and Spread
const arr = [1,2,3,4];
//
let a = 5;
function add(...rest) { 
    console.log(a, rest);
}
add(...arr);

// Spread
function sub(...spread) {
    console.log('From sub', spread);
}
sub(arr)
// Output: 1,2,3,4
