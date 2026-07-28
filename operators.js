let multiple = prompt("Enter a number:");  //Checking multiple of 5

if((multiple%5)==0)
{
    console.log(multiple,"is a multiple of 5.");
}

else
{
    console.log(multiple," is not a multiple of 5.");
}


//============================================================

let score = prompt("Enter your score:");    //Grade Distribution using conditional statements

if (score>=80 && score<=100)
{
    console.log("Congratulations, You got A+!");
}

else if (score>=70 && score<80)
{
    console.log("Congratulations, You got A!");
}

else if(score>=60 && score<70)
{
    console.log("OK! You got B+.");
}

else if(score>=50 && score<60)
{
    console.log("OK! You got B.");
}

else{
    console.log("Better luck next time..");
}