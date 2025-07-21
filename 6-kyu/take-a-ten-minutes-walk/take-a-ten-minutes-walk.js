function isValidWalk(walk) {
if (walk.length !== 10) return false;
let count = {n: 0, s: 0, w: 0, e: 0} 
for(let dir of walk){
 count[dir]++; 
}
  return count.n === count.s && count.w === count.e; 
}