const evaluate = (left,op,right) => {
    const result1 = {}
    const leftKey = Object.keys(left)[0];
    const rightKey = Object.keys(right)[0];
        for(const key of ['add','subtract', 'multiply', 'divide']){
            const arr = left[leftKey][key]
            if(key === 'add'){
                result1.add = arr.reduce((acc,num) => acc + num,0)
            } 
            else if(key === 'subtract'){
                result1.subtract = arr.reduce((acc,num) => acc - num) 
            } 
            else if(key === 'multiply'){
                result1.multiply = arr.reduce((acc,num) => acc * num , 1) 
            } 
            else {
                result1.divide = arr.reduce((acc,num) => acc / num)
            }
        }
        const result2 = {}
        for(const key of ['add','subtract','multiply','divide']){
            const arr = right[rightKey][key]
            if(key === 'add'){
                result2.add = arr.reduce((acc,num) => acc + num,0)
            } 
            else if(key === 'subtract'){
                result2.subtract = arr.reduce((acc,num) => acc - num) 
            } 
            else if(key === 'multiply'){
                result2.multiply = arr.reduce((acc,num) => acc * num , 1) 
            } 
            else {
                result2.divide = arr.reduce((acc,num) => acc / num)
            }
        }

        const combine = (res, operationKey) => {
            const values = [res.add, res.subtract, res.multiply, res.divide];
            if(operationKey === 'add') return values.reduce((acc,num) => acc + num);
            if(operationKey === 'subtract') return values.reduce((acc,num) => acc - num);
            if(operationKey === 'multiply') return values.reduce((acc,num) => acc * num);
            if(operationKey === 'divide') return values.reduce((acc,num) => acc / num);
        }
        const total1 = combine(result1, leftKey);
        const total2 = combine(result2,rightKey);
        if (op === 'add') {
        return total1 + total2
        } 
        else if (op === 'subtract') {
            return total1 - total2
        } 
        else if (op === 'multiply') {
            return total1 * total2
        } 
        else {
            return total1 / total2
        }
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
console.log(evaluate(left,'divide',right))