const isAnagram =(test, original)=> {
  let word = test.toLowerCase().split('').sort().join('')
  let text = original.toLowerCase().split('').sort().join('')
  return word === text

};
console.log(isAnagram('hey','Yeh'))