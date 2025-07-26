function squareDigits(num){
  return Number(String(num).split('').map(d => d * d).join(''));
}