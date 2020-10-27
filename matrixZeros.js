// matrix zeros - leetcode #73

// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

// Input: 
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]

// const setZeros = (matrix) => {
//     // Check and make sure there is a matrix passed in and that the length of the matrix is !== 0
//     if(matrix === null || matrix.length === 0 || matrix[0].length == 0) {
//         return -1
//     } 
//     // Make vars for matrix.length and matrix[0].length
//     const m = matrix.length
//     const n = matrix[0].length

//     // Two booleans to see if the first row or col needs to be marked as zero
//     let firstRowZero = false
//     let firstColZero = false

//     for(let j = 0; j < n; j++) {
//         if(matrix[0][j] === 0) {
//             firstRowZero = true;
//             break;
//         }
//     }

//     for(let i = 0; i < m; i++) {
//         if(matrix[i][0] === 0) {
//             firstColZero = true
//             break;
//         }
//     }

//     for(let i = 1; i < m; i++) {
//         for(let j = 1; j < n; j++) {
//             if(matrix[i][j] === 0) {
//                 matrix[0][j] = 0
//                 matrix[i][0] = 0
//             }
//         }
//     }

//     for(let i = 0; i < m; i++) {
//         for(let j = 0; j < n; j++) {
//             if(matrix[i][0] === 0 || matrix[0][j] === 0) {
//                 matrix[i][j] === 0
//             }
//         }
//     }
//     if(firstRowZero) {
//         for(let j = 0; j < n; j++) {
//             matrix[0][j] = 0
//         }
//     }

//     if(firstColZero) {
//         for(let i = 0; i < m; i++) {
//             matrix[i][0] = 0;
//         }
//     }
//     return matrix
// }

// const matrix = [
//     [1,1,1],
//     [1,0,1],
//     [1,1,1]
//   ]

// console.log(setZeros(matrix))

class Solution {
    public void setZeroes(int[][] matrix) {
      Boolean isCol = false;
      int R = matrix.length;
      int C = matrix[0].length;
  
      for (int i = 0; i < R; i++) {
  
        // Since first cell for both first row and first column is the same i.e. matrix[0][0]
        // We can use an additional variable for either the first row/column.
        // For this solution we are using an additional variable for the first column
        // and using matrix[0][0] for the first row.
        if (matrix[i][0] == 0) {
          isCol = true;
        }
  
        for (int j = 1; j < C; j++) {
          // If an element is zero, we set the first element of the corresponding row and column to 0
          if (matrix[i][j] == 0) {
            matrix[0][j] = 0;
            matrix[i][0] = 0;
          }
        }
      }
  
      // Iterate over the array once again and using the first row and first column, update the elements.
      for (int i = 1; i < R; i++) {
        for (int j = 1; j < C; j++) {
          if (matrix[i][0] == 0 || matrix[0][j] == 0) {
            matrix[i][j] = 0;
          }
        }
      }
  
      // See if the first row needs to be set to zero as well
      if (matrix[0][0] == 0) {
        for (int j = 0; j < C; j++) {
          matrix[0][j] = 0;
        }
      }
  
      // See if the first column needs to be set to zero as well
      if (isCol) {
        for (int i = 0; i < R; i++) {
          matrix[i][0] = 0;
        }
      }
    }
  }