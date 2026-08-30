const evaluate = (left,op,right) => {
    const result1 = {}
    for(const key in left['multiply']){
        const arr = left['multiply'][key]
        if(key === 'add'){
            result.add = arr.reduce((acc,num) => acc + num,0)
        } 
        else if(key === 'subtract'){
            result.subtract = arr.reduce((num,acc) => num - acc, 0) 
        } else if(key === 'multiply'){
            result.multiply = arr.reduce((num,acc) => num * acc, 1) 
        } else {
            result.divide = arr.reduce((num,acc) => num / acc, 1)
        }
    }
    return result1
}
const left = {
    'multiply': {
        'add': [1, 2, 3, 4, 5],
        'subtract': [5, 6, 7, 8, 9],
        'multiply': [1, 2, 3, 4, 5],
        'divide': [1, 2, 3, 4, 5]
    }
};
console.log(evaluate(left))