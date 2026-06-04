const isSquare = n =>{
const num = Math.sqrt(n)
return (Math.floor(num) !== num) ? false:true
}
console.log(isSquare(16))