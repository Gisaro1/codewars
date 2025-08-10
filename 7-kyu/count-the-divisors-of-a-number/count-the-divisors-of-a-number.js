function getDivisorsCnt(n) {
  if (n === 0) return 1;
​
  let count = 0;
  let sqrt = Math.floor(Math.sqrt(n));
​
  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      count += 2; // i and n/i are both divisors
    }
  }
​
  // If n is a perfect square, we counted sqrt(n) twice
  if (sqrt * sqrt === n) {
    count--;
  }
​
  return count;
}
​