let str = prompt("Enter a string:");  //counting vowels in a string

function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    console.log(count);
}

countVowels(str);