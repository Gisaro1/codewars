const duplicateEncoder = (word) =>{
const text = word.toLowerCase().split('');
return text.map(char => text.indexOf(char) === text.lastIndexOf(char) ? '(' : ')').join('')
};
console.log(duplicateEncoder('Hello Waguan'))