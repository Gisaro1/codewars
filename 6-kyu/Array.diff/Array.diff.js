const arrayDiff = (a, b) => {
let set = new Set(b)
return a.filter(char => set.has(char))
}
console.log(arrayDiff([1,2,3],[1,3,2,4]))