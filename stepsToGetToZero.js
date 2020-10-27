// Steps to get number to zero

const getToZero = (num) => {
    let output = 0;
    while(num !== 0) {
        if(num % 2 === 0) {
            num = num / 2
        } else {
            num = num - 1
        }
        output++
    }
    return output
}

console.log(getToZero(8))