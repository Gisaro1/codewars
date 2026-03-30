function findShort(s){
  let word = s.split(' ')
  let length = word.map(word => word.length)
  return Math.min(...length)
}