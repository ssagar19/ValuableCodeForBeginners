// Reverse a string recursivly

function reverseString(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}
const str = 'hello'
console.log(reverseString(str))

reverseString('hello')
    reverseString('elloh')
        reverseString('lloeh')
            reverseString('loleh')
                reverseString('olleh')
                    reverseString('')
                    return
                return
            return
        return
    return
return

// const countdown = (num) => {
//     if(num <= 0) {
//         console.log('Did it!')
//         return
//     } else {
//         console.log(num)
//         countdown(num -1)
//     }
// }

// countdown(5)
//     countdown(4)
//         countdown(3)
//             countdown(2)
//                 countdown(1)
//                     countdown(0)
//                     return 5
//                 return 4
//             return 3
//         return 2 
//     return 1
// return did it 

countdown(5)


