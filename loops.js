// for(num=1;num<+5;num++)
// {
//     console.log("Hello World!");
// }

//=========================================================

//for in loop 
// let student = {
//     name : "Angel",
//     age:19,
//     cgpa:3.60,
//     isPass: true,
// };

//==============================================================

// for(let key in student){

//     console.log(key, student[key]);
// }

//===============================================================

// for(let i=0;i<=100;i+=2)     //For printing even numbers up to 100
// {
    
//     console.log("Even numbers:",i);
// }

//============================================================

//Create a game of guessing numbers

let correctNum = 10;

let userNum = prompt("Guess the number:");

while(userNum != correctNum)
{
    if(userNum<correctNum)
    {
        userNum = prompt ("Your number is smaller..");
    }

    else if(userNum>correctNum)
    {
        userNum = prompt ("Your number is bigger...");
    }
   
}

console.log("Congratulations!, You guessed the right number!");



