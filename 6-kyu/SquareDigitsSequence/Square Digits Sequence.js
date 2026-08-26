const squareDigitsSequence = ab => {
    let result = [];
    const change =  String(ab).split('').map(Number);
    const sqr = change.map(char => Math.pow(char,2)).reduce((total,num) => total + num, 0);
    result.push(sqr)
    return result

}
console.log(squareDigitsSequence(16))