const digPow = (n,p) =>{
  let total = 0
  const splitN = String(n).split('')
  for(let i = 0; i < splitN.length;i++){
    let char = splitN[i];
    const mult = Math.pow(parseInt(char,),p++)
    total += mult;
  }
  if(total % n === 0){
    return total/n
  } else{
    return -1
  }
}
console.log(digPow(46288,3))