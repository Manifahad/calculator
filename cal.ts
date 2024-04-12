#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message:"enter the first number", type: "number", name:"firstNumber"},
{message: "enter the second number" , type: "number", name:"secondNumber"},
{message: "select the operator",
type:"list",
name: "operator",
choices:["adition","substraction","division","multipication"],
}
]) 
if (answer.operator ==="adition") {
    console.log(`the value is ${answer.firstNumber +answer.secondNumber}`)
    
    
} else if (answer.operator ==="substraction") {
    console.log(`the value is ${answer.firstNumber - answer.secondNumber}`)
    
} else if(answer.operator==="division"){
    console.log(`the value is ${answer.firstNumber / answer.secondNumber}`)
} else if(answer.operator==="muiltiplication"){
    console.log(`the value is ${answer.firstNumber * answer.secondNumber}`)
}
