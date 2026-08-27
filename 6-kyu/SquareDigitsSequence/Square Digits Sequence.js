const squareDigitsSequence = ab => {
    let result = [];

    let current = ab
    while(String(current).length > 1){
        const change =  String(current).split('').map(Number);
        const sqr = change.map(char => Math.pow(char,2)).reduce((total,num) => total + num, 0);
        result.push(sqr)
        current = sqr
    }
    return result.length

}
console.log(squareDigitsSequence(16))