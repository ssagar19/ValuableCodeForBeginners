// Get vowel count

const getVowelCount = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    for(let letter of str) {
        if(vowels.includes(letter.toLowerCase())) {
            count++
        }
    }
    return count;
}

const str = 'ThIs is the string'
console.log(getVowelCount(str))
