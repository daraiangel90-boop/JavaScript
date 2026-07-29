let userName = prompt("Enter your full name:");  //generating an username starting with @input_name_stringlength
let lowerCase = userName.toLowerCase();
let removeSpaces = lowerCase.replaceAll(" ","");
let length = userName.length;


let genName = `@${removeSpaces}${length}`;
console.log(genName);
