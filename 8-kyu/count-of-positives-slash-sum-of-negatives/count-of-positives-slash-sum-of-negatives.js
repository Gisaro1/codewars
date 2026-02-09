function countPositivesSumNegatives(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }
​
  let count = 0; // ✅ count must be declared
  let sum = 0;
​
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++; // ✅ we're using count here
    } else if (arr[i] < 0) {
      sum += arr[i];
    }
  }
​
  return [count, sum]; // ✅ return the result
}
​