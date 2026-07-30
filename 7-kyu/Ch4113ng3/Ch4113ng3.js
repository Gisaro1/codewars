const nerdify = txt =>{
const object = {a:4,e:3,l:1}
return txt.replace(/[aei]/gi, char => object[char.toLowerCase()]);
}
console.log(nerdify('Fundamentals'))