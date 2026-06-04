const high = x =>{
const word = x.toLowerCase().split(' ')
const score = word.map(char =>{
    let sum = 0 
    for(let i =0;i<char.length;i++){
        sum += char.charCodeAt(i)-96
    }
    return sum
})
let max = Math.max(...score)
let maxIndex = score.indexOf(max)
return word[maxIndex]
}
console.log(high('man i need a taxi up to ubud'))