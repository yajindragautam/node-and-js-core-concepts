/* 
There are three thy of codition statement in JS
1) If Statement
2) If Else Statement
3) If Else If Statement
*/

// 1) If Statement
let age = 25;
if(age === 18){
    console.log('You can access this ..');
}

// 2) If Else Statement
if(age >= 18){
    console.log('You can access this ..');
}else{
    console.log('Age need verifications..');
}

// 3) If Else If Statement

if(age === 18){
    console.log('You can access this ..');
}else if(age > 20){
    console.log('You are above 20.');
}
else{
    console.log('Age need verifications..');
}

// Ternary Operator
const auther = "Codewithyaj";
auther === "Codewithyaji" ? console.log('This is Codewithyaji Content') : console.log('Author not found');