function findNextSquare(sq) {
const root = Math.sqrt(sq)
if(Number.isInteger(root)){
  const nextRoot = root + 1;
  return nextRoot * nextRoot
} else{
  return -1;
}
}