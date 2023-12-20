// Simple Calculator Using Propmt-Sync
var prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Please enter first number : '));
let num2 = parseInt(prompt('Please enter second number : '));
let opr = prompt("Please enter a operator for process : ");

if(opr == "+"){
    console.log(`Your Answer is ${num1 + num2}`);
}else if(opr == "-"){
    console.log(`Your Answer is ${num1 - num2}`);
}else if(opr == "*"){
    console.log(`Your Answer is ${num1 * num2}`);
}else if(opr == "/"){
    console.log(`Your Answer is ${num1 / num2}`);
}else{
    console.log("Please enter a valid operator");
}

export{};