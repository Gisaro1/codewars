const findUniq = arr => arr.filter(char =>arr.indexOf(char) === arr.lastIndexOf(char))
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))

