function twoSum(numbers, target) {
let total = []
for(let i = 0; i < numbers.length; i++){
  for(let u = i + 1; u < numbers.length; u++){
    if(numbers[i] + numbers[u] === target){
    total.push(i,u)
  }
  }
}
  return total
}
console.log(twoSum([3, 2, 4], 6))