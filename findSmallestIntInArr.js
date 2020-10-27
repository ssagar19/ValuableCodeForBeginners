// Find the smallest in in an array.

const findSmallestInt = (arr) => {
    const smallest = Math.min(...arr)
    return smallest
}

const arr = [12,3,4,5,6,5,4,3,2,1,0]

console.log(findSmallestInt(arr))