function chunk(array,size){
const newArray=[];

for(let ele of array){

const last = newArray[newArray.length-1];
if(!last || last.length===size){
newArray.push([ele]);
}
else{
last.push(ele);
}
}
return newArray;

}
