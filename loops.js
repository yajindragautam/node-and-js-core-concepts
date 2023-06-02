/*
There are 5 type of loops in javascript
1) For Loop
2) While Loop
3) Do While Looop
4) For In Loop
5) For Of Loop
*/

// 1) For Loop
// let num1 = 5;
/* 
For Loop have three stages
 - Initilization
 - Condition
 - Increment / Decrement 
*/
// for(let i = 0; i<= num1 ; i++){
//     // console.log('i :',i);
// }

// 2) While Loop
// let num2 = 0;
// while (num2 <= 6) {
//     // console.log('Loop using while loop :', num2);
//     // num2++;
// }

// 3) Do While Loop
// let a = 4;
// do{
//     console.log('Js is the best programming language');
// }while(a < 3);

// 4) For In Loop
const person = {fname:"John", lname:"Doe"}; 

for(let key in person){
    console.log('key :'+ key +" "+person[key]);
}