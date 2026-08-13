/*let marks = [85, 92, 78, 96, 88];

let sum = 0;

for (let val of marks){
    sum+=val;
}

let avg = sum/marks.length;
console.log("The average marks is: "+avg);
*/
let items = [250, 400, 150, 300, 500]; //Hello
let i=0;
for (let val of items){
    console.log("Item "+i+" is: "+val);
    let offer = val/10;
    items[i] = items[i]-offer;
    console.log("Item "+i+" after discount is: "+items[i]);
    i++;
}

//for ( let i=0; i<items.length; i++){
