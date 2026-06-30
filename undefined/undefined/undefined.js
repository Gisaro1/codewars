const missing = arr=>{
    const set = new Set(arr)
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const missin = []
    for(i = min; i <= max;i++){
        if(!set.has(i)){
            missin.push(i)
        }
    }
    return missin
}
console.log(missing([0,2,3,4,8]))

const missinLetter = arr =>{
    const sett = new Set(arr);
const start = arr[0].charCodeAt(0);
const end = arr[arr.length -1].charCodeAt(0);
const missinn = []
for(let i = start; i<= end;i++){
    const letter = String.fromCharCode(i)
    if(!sett.has(letter)){
        missinn.push(letter);
    }
}
return missinn;
}
console.log(missinLetter(['a','c','d','g']))