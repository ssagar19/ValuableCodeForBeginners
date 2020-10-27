// Input: [3,1,2,4]
// Output: 17
// Explanation: Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.  Sum is 17.

var sumSubarrayMins = function (A) {
  const mod = 1e9 + 7;
  const N = A.length;
  let res = 0;
  const left = [];
  const right = [];

  // Gen left arr - num of subarrs ending with A[i] and A[i] is the minimum
  // O(n) - each item in A is pushed or poped from stackLeft at most once
  const stackLeft = [-1];
  for (let i = 0; i < N; i++) {
    while (stackLeft.length > 1 && A[i] < A[stackLeft[stackLeft.length - 1]])
      stackLeft.pop();
    left[i] = i - stackLeft[stackLeft.length - 1];
    stackLeft.push(i);
  }

  // Gen right arr - num of subarrs starting with A[i] and A[i] is the minimum
  // O(n) - each item in A is pushed or poped from stackRight at most once
  const stackRight = [N];
  for (let i = N - 1; i >= 0; i--) {
    while (
      stackRight.length > 1 &&
      A[i] <= A[stackRight[stackRight.length - 1]]
    )
      stackRight.pop();
    right[i] = stackRight[stackRight.length - 1] - i;
    stackRight.push(i);
  }

  // left[i] * right[i] is the amount of subarrays where A[i] is the minimum
  for (let i = 0; i < N; i++) res = (res + A[i] * left[i] * right[i]) % mod;

  return res;
};

const arr = [3, 1, 2, 4];
console.log(sumSubarrayMins(arr));
