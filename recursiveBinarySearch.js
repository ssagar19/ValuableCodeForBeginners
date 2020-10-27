// Binary search recursion

// const binarySearch = (arr, x) => {
//     const low = 0
//     const high = arr.length -1
//     return rbs(arr, low, high, x)
// }


// function rbs(arr, low, high, x) {
//     if(low > high) {
//         return -1
//     }
//     let midpoint = Math.floor(low + high / 2)
//     if(midpoint === x) {
//         return midpoint
//     } else if(midpoint < x) {
//         return binarySearch(arr, midpoint+1, high, x)
//     } else {
//         return binarySearch(arr, low, midpoint-1, x)
//     }
// }

// const arr = [1,2,3,4,5,6,7,8,9]
// const x = 6
// console.log(binarySearch(arr, x))


const binarySearch = (arr, target, min, max) => {
    if(min === undefined) min = 0
    if(max === undefined) max = arr.length - 1

    let mid = Math.floor(((max - min) / 2) + min)
    if(max <= min && arr[mid] !== target) {
        return -1
    } else if(arr[mid] === target) {
        return mid
    } else if(arr[mid] < target) {
        return binarySearch(arr, target, mid+1, max)
    } else {
        return binarySearch(arr, target, min, mid-1)
    }
};

const arr = [1,2,3,4,5,6,7,8,9]
const target = 9
console.log(binarySearch(arr, target))