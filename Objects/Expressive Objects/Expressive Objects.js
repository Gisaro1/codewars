const evaluate = (left) => {
    for(const key in left['multiply']){
        if(key === 'add'){
            const sum = left['multiply']['add'].reduce((num,acc) => acc + num, 0)
            return (`add: ${sum}`)
        }
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
console.log(evaluate(left))