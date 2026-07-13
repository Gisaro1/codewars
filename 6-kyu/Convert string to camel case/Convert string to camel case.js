const toCamelCase = str =>{
const text = str.replace(/[-]/g,'-');
let result = '';
let capital = false;
for (let char of text){
   if(char === '-'){
    capital = true;
   } else if(capital){
    result += char.toUpperCase()
    capital = false;
   } else{
    result += char
   }
}
return result;
}
console.log(toCamelCase('the-stealth-warrior'))