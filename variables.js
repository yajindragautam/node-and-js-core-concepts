// There are three ways to declare variables in js
/* 
1) LET - let can be re assigned but cannot be re declared
2) VAR - Var can be re-declared and re-assigned
3) CONST - const can nither be re-declared not r-define
*/

var num = 1;
var num = 2;
console.log('Var can be re-declared and re-defined :',num);

let myName = "Yajindra";
myName = "Gautam"; // Can re-assigned
// let myName = "Codewithyaji";
console.log('Let can not be re-declared and but can re-assigned :',myName);

const instHandler = "Codewithyaji";
console.log('Const can not be re-declared and re-assigned :',instHandler);