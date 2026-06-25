const arrayDiff = (a, b) => {
  const merge = [...a,...b];
return merge.filter(char => merge.indexOf(char)=== merge.lastIndexOf(char))
}
console.log(arrayDiff([1,2,3],[1,3,4]))