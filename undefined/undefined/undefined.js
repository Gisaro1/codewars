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