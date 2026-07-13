const toCamelCase = str =>{
const word = str.split(/[-_]/);
for(let i = 0 ; i < word.length;i++){
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
}
return word.join('')
}
console.log(toCamelCase('the_stealth-warrior'))