// ARRAY METHODS

const arr = ['Yajindra','Gautam',1,2,3];

// 1) Array.lenght() - find length of array
console.log('Array.lenght()', arr.length);

// 2) Array.toString() - convert array to string saperate by comma
console.log('Array.toString() :', arr.toString());

// 4) Array.pop() - remove last element of an array and return that value
console.log('Array.pop() :', arr.pop());

// 5) Array.push() - add new element in array from last index and return that value
console.log('Array.push() :', arr.push(4));

// 5) Array.shift() - remove first element in arra and return that item
console.log('Array.shift() :', arr.shift());

// 5) Array.unshift() - add new item from first element in arra and return that arr length
console.log('Array.unshift() :', arr.unshift(1));

// 5) Array.join() - convert array to string
console.log('Array.join() :', arr.join(','));

// 5) Array.concat() - join multiple array
const number = [1,2,3];
const str = ['Yajindra','Gautam'];
const result = [];
console.log('Arry after concat :', result.concat(str,number));

// 5) Array.delete() - delete any item from array
console.log('Array.delete() :', delete result[0]);

/* 5) Array.splice() - splice takes three artument 
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*/
console.log('Array.splice() :', arr.splice(1,1,'Yajindra'));

console.log(arr);