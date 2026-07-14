const sumDigPow = (a, b) =>{
let result = [];
for(let i = a ; i<= b ; i++){
    const digits = String(i).split('');
    const sum = digits.reduce((acc,digit,index) =>{
        return acc + Math.pow(Number(digit), index + 1);
    }, 0);
    if(sum === i){
        result.push(i)
    }
}
return result
}
console.log(sumDigPow(1,12))