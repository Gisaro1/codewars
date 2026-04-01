function getDivisorsCnt(n) {
  if (n === 0) return 1;   // as in your original code
​
  let count = 0;
  const sqrt = Math.floor(Math.sqrt(n));
​
  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      count += (i * i === n) ? 1 : 2;   // clean way to handle perfect squares
    }
  }
  return count;
}