const uniqueInOrder = iterable =>{
let text = typeof iterable === 'string' ? iterable.split('') : iterable
return text.filter((item,index) => item !== text[index - 1])
}
console.log(uniqueInOrder('1222333456789'))