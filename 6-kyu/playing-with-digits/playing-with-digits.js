function digPow(n, p){
const digits = String(n).split('').map(Number);
  let sum = 0;
  for( let i = 0; i < digits.length ; i++){
    sum += Math.pow(digits[i],p + i);
  }
  const k = sum/n;
  return Number.isInteger(k) && k > 0 ? k : -1;
}