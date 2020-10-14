
// Challenge 1
function reverseImage(arr){
for(var i=0; i<arr.length;i++){
for(var j=0; j<arr[i].length;j++){

if(arr[i][j] === 1){
arr[i][j] =0;
}
else{
arr[i][j] =  1;
}
}
}
return arr;

}
function transformUpvotes(votes){
var newList =[];
var numConverter=0;
var arr = votes.split(" ");
for(var i=0; i<arr.length;i++){
if([...arr[i]].indexOf('k')>-1){
[...arr[i]].splice([...arr[i]].indexOf('k'),1);
numConverter = parseFloat(arr[i]);
numConverter = numConverter *1000;
newList.push(numConverter);
}
else{
newList.push(parseInt(arr[i]));
}

}
return newList;
}

module.exports = {transformUpvotes, reverseImage};
