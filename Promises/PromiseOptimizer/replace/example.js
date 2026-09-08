const splittin = num => {
    let str = num.toString()
    let result = [];
    for(let i = 0 ;i < str.length; i++){
        let char = str[i]
        if(char !== '0'){
            let number = Number(char)
            let answer = number * Math.pow(10,str.length-1 - i)
            result.push(answer)
        }
        if(char === '.'){
            for(let j = str.indexOf(.); j < )
        }
    }
    return result.join(' + ')
}
console.log(splittin(1000200));