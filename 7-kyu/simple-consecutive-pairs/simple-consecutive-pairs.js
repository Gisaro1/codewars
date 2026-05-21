function pairs(ar){
let count = 0
for(i = 0;i <=ar.length; i+=2){
  if(ar[i]+1 === ar[i + 1] || ar[i] === ar[i + 1]+1){
    count++
  }
}
  return count
};