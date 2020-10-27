const arr = [1,16,25,34,22,55,66,1,2,3,4,5,6,5,4,3,2,1,23]

const findLargest = (arr) => {
    const largest = Math.max(...arr)
    const set = new Set(arr)
    set.delete(largest)
    return [Math.max(...set), largest]
}

const findLargest2 = (arr) => {
    if(arr.length < 2) return false
    if(arr.length === 2) return arr


    let secondLargest = arr[0]
    let largest = arr[1]

    if(secondLargest > largest) {
        [largest, secondLargest] = [secondLargest, largest]
    }

    // For loop
    for(let i = 2; i < arr.length; i++) {
        let current = arr[i]
        if(current > secondLargest) {
            secondLargest = current
            if(secondLargest > largest) {
                [largest, secondLargest] = [secondLargest, largest]
            }
        }
    }
    return [secondLargest, largest]
}

console.log(findLargest2(arr))

