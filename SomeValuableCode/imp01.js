// Challenge 1
function diceGame(arr){
var sum =0;
for(var i =0; i<arr.length; i++){
for(var j =0; j<arr[i].length; j++){
if(arr[i][j] === arr[i][j+1]){ sum = 0; break;}
sum=  sum + arr[i][j];
}
}
return sum;
}

// Challenge 2
function countVowels(word) {
var t = ['a','e','i','o','u'];
var c=0;
  var r = word.split('');
for(var i =0; i<r.length; i++){
if(t.indexOf(r[i])>-1){ c++;}

}
return c;
}
