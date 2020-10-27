// Find the missing numbers from an array

const findMissing = (arr) => {
    const missing = []
    let current = 1
    while(current <= arr.length) {
        if(!arr.includes(current)) {
            missing.push(current)
        }
        current++
    }
    return missing
}

const arr = [4,3,2,7,8,2,3,1]

console.log(findMissing(arr))
