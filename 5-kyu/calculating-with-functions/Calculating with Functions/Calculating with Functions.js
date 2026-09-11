const zero = operation => {
  return operation ? operation(0): 0 
}
const one = operation => {
  return operation ? operation(1): 1 
}
const two = operation => {
  return operation ? operation(2): 2 
}
const three = operation => {
  return operation ? operation(3): 3
}
const four = operation => {
  return operation ? operation(4): 4 
}
const five = operation => {
  return operation ? operation(5): 5
}
const six = operation => {
  return operation ? operation(6): 6
}
const seven = operation => {
  return operation ? operation(7): 7 
}
const eight = operation => {
  return operation ? operation(8): 8
}
const nine = operation => {
  return operation ? operation(9): 9 
}

const plus = b => a => a + b
const minus = b => a => a - b   
const times = b => a => a * b
const dividedBy = b => a => Math.floor(a / b) 
console.log(seven(times(five())))