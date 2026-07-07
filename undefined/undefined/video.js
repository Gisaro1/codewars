const missletter = arr =>{
    let result = [];
    const set = new Set(arr);
    const start = arr[0].charCodeAt(0);
    const end = arr[arr.length - 1].charCodeAt(0);
    for(let i = start; i < end;i++){
        const text = String.fromCharCode(i);
        if(!set.has(text)){
            result.push(text)
        }
    }
    return result
}
console.log(missletter(['a','z']))