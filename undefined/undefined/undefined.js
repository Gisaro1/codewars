function countingSort(arr) {
  if (arr.length === 0) return arr;
​
  // Step 1: Find min and max
  let min = arr[0];
  let max = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
​
  // Step 2: Initialize count array
  const range = max - min + 1;
  const count = new Array(range).fill(0);
​
  // Step 3: Populate count array
  for (let num of arr) {
    count[num - min]++;
  }
​
  // Step 4: Calculate cumulative counts (optional, but improves stability)
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
​
  // Step 5: Build the sorted array (backwards for stability)
  const sorted = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    const pos = count[num - min] - 1;
    sorted[pos] = num;
    count[num - min]--;
  }
​
  return sorted;
}