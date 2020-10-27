// Given some operators, + and -, run both
// * + ()

function findLargest(a,b,c) {
    const results = []
    results.push(a*(b+c))
    results.push(a*b*c)
    results.push(a+b*c)
    results.push((a+b)*c)
    console.log(results)
    return Math.max(...results)
}

console.log(findLargest(12,13,14))