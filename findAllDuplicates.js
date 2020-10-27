// Find all duplicates
//O(n)

// First solution
const findDups = (arr) => {
    const dups = []
    const compare = []

    for(let num of arr) {
        if(!compare.includes(num)) {
            compare.push(num)
        } else {
            dups.push(num)
        }
    }
    return dups
}

const findDups = (arr) => {
    const dups = []
    let index

    for(let i = 0; i < arr.length; i++) {
        index = Math.abs(arr[i]) - 1
        if(arr[i] < 0) {
            dups.push(index + 1)
        } else {
            arr[index] *= -1
        }
    }
    return dups
}
              
const arr = [-4,-3,-2,-7,8,2,-3,-1]
console.log(findDups(arr))

