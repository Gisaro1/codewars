function SeriesSum(n){
    let total = 0
    for(let i = 0;i < n; i++){
        let deno = 1 + (3 * i)
        total += 1/deno
    }
    return total.toFixed(2)
}
​