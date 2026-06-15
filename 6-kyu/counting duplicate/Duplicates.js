const duplicateCount = text => {
    let word = text.toLowerCase()
let seen = new Set()
let duplicate = new Set()
for(const char of word){
    if(seen.has(char)){
        duplicate.add(char)
    } else{
        seen.add(char)
    }
}
return duplicate.size
}
console.log(duplicateCount('Indivisibilities'))