function chunk(array,size){
const newArray=[];

for(let element of array){

const last = newArray[newArray.length-1];
if(!last || last.length===size){
newArray.push([element]);
}
else{
last.push(element);
}
}
return newArray;

}
