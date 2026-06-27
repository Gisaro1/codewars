const doubleChar =str => {
return str.split('').map(z => z+z).join('')
}
console.log(doubleChar('billy'))
