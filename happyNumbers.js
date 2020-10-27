// Find happy numbers

const happy = (num) => {
    let ans = squareNumber(num)
    const seen = []
    while(ans !== 1) {
        if(seen.includes(ans)) {
            return false
        } else {
            let current = ans
            seen.push(current)
            ans = squareNumber(current)
        }
    }
    return true
}

function squareNumber(num) {
    num = num.toString()
    let ans = 0
    for(let i = 0; i < num.length; i++) {
        ans = ans + num[i]**2
    }
    return ans
}

console.log(happy(19))


