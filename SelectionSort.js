//code to sort array elements.
function selectionSort(arr){

for(var i=0; i<arr.length;i++){
var lowest = i;
for(var j=i+1;j<arr.length;j++){
if(arr[j]<arr[lowest]){   lowest = j;}
}
var temp= arr[i];
arr[i] = arr[lowest];
arr[lowest] = temp;
}
return arr;

}
