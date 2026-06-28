const expandedForm = num => {
const str = num.toString();
const result = [];
for(let i = 0;i < str.length;i++){
    let char = str[i];
    if(char !== '0'){
        const zero = '0'.repeat(str.length - 1- i);
        result.push(char + zero)
    }
}
return result.join(' + ')
}
console.log(expandedForm(22))