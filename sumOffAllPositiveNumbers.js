// Sum of all positive numbers

const sumOfAllPositive = (arr) => {
    let sum = 0;
    arr.forEach(number => {
        if(number % 2 === 0) {
            sum = sum += number
        }
    })
    return sum
}

const arr = [2,4,6,7,1,5]

console.log(sumOfAllPositive(arr))

