// Min size sub array sum

function subArray(searchNumber, arr) {
  let result = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;

  // for loop
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum >= searchNumber) {
      result = Math.min(result, i - left + 1);
      sum -= arr[left++];
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}

const arr = [1, 1, 1];
const searchNumber = 4;
console.log(subArray(searchNumber, arr));
