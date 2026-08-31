const evaluate = (left,op,right) => {
    const result1 = {}
        for(const key in left['multiply']){
            const arr = left['multiply'][key]
            if(key === 'add'){
                result1.add = arr.reduce((acc,num) => acc + num,0)
            } 
            else if(key === 'subtract'){
                result1.subtract = arr.reduce((num,acc) => num - acc, 0) 
            } else if(key === 'multiply'){
                result1.multiply = arr.reduce((num,acc) => num * acc, 1) 
            } else {
                result1.divide = arr.reduce((num,acc) => num / acc, 1)
            }
        }
        const result2 = {}
        for(const key in right['subtract']){
            const arr = right['subtract'][key]
            if(key === 'add'){
                result2.add = arr.reduce((acc,num) => acc + num,0)
            } 
            else if(key === 'subtract'){
                result2.subtract = arr.reduce((num,acc) => num - acc, 0) 
            } else if(key === 'multiply'){
                result2.multiply = arr.reduce((num,acc) => num * acc, 1) 
            } else {
                result2.divide = arr.reduce((num,acc) => num / acc, 1)
            }
        }
    const total2 = Object.values(result1).reduce((num,acc) => num - acc, 0)
    const total1 = Object.values(result1).reduce((num,acc) => num * acc, 0)
    return `${total1} ${op} ${total2}`
}
const left = {
    'multiply': {
        'add': [1, 2, 3, 4, 5],
        'subtract': [5, 6, 7, 8, 9],
        'multiply': [1, 2, 3, 4, 5],
        'divide': [1, 2, 3, 4, 5]
    }
};
const right = {
    'subtract': {
        'add': [1, 2, 3, 4, 5],
        'subtract': [1, 2, 3, 4, 5],
        'multiply': [1, 2, 3, 4, 5],
        'divide': [1, 2, 3, 4, 5]
    }
};
console.log(evaluate(left,'add',right))