const findOdd = A => {
const unique = A.filter(char => {
    const neww = A.filter(num => num === char).length
    return neww % 2 !== 0
});
return unique[0]
}
console.log(findOdd([1,2,2,3,3,3,3,3,2,2,1]))