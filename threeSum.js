// // Three sum

// const threeSum = (arr) => {
//     // create storage for result
//     let count = 0
//     const result = []
//     // sort array
//     arr = arr.sort()
//     // Main loop
//     for(let i = 0; i < arr.length - 2; i++) {
//         if(i === 0 || arr[i] > arr[i - 1]) {
//             // Set start end
//             let start = i + 1
//             let end = arr.length - 1
//             // While loop
//             while(start < end) {
//                 // If arr[s], end, and i add up to 0, add it to result
//                 if(arr[i] + arr[start] + arr[end] === 0) {
//                     result.push([arr[i], arr[start], arr[end]])
//                 }
//                 // If the current three add up to less than 0, increase start
//                 if(arr[i] + arr[start] + arr[end] < 0) {
//                     let currentStart = start
//                     while(arr[currentStart] === arr[start] && start < end) {
//                         start++
//                     }
//                 }
//                 // If the current three add up to > 0, dec end
//                 else {
//                     let currentEnd = end
//                     while(arr[currentEnd] === arr[end] && start < end) {
//                         end--
//                     }
//                 }
//             }
//         }
//     }
//     return result
// }

// const arr = [-1, -1, -1, 3, 4, 1, 0, -3, 4, 1, 2, 3, 4, 5, -9]   

// console.log(threeSum(arr))

const threeSum = (arr) => {
    // Sort the array
    arr = arr.sort()
    let count = 0
    
}