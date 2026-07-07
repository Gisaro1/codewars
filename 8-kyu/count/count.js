const countPositivesSumNegatives = input => {
if (!input || input.length === 0) return [];
let positive = 0;
let sumNegative = 0;
for(let char of input){
    if(char > 0){
        positive++;
    } else{
        sumNegative += char;
    }
}
return [positive,sumNegative];
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))