// Finding a peak element in a 2D array.

// Divide and conquer approach
function peakElement(arr) {
  let start = 0;
  let end = arr.length - 1;
  const n = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (
      mid === 0 ||
      (arr[mid] > arr[mid - 1] && (mid === n - 1 || arr[mid] > arr[mid + 1]))
    ) {
      return arr[mid];
    } else if (arr[mid] < arr[mid - 1]) {
      // search to the left
      // Set end mid - 1
      end = mid - 1;
    } else {
      // Serch to the right
      // set start mid + 1
      start = mid + 1;
    }
  }
}
const arr = [7, 6, 5, 4, 3, 2, 1];
console.log(peakElement(arr));
