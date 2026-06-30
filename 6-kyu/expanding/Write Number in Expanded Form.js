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
console.log(expandedForm(22.20))

const expandedForm = num => {
  const str = num.toString();
  const result = [];
  
  // Find where the decimal point is, if it exists
  const dotIndex = str.indexOf('.');
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    // Skip the decimal point and zeros
    if (char !== '0' && char !== '.') {
      if (dotIndex === -1 || i < dotIndex) {
        // Whole number logic (uses your original formula)
        const totalLength = dotIndex === -1 ? str.length : dotIndex;
        const zero = '0'.repeat(totalLength - 1 - i);
        result.push(char + zero);
      } else {
        // Decimal number logic (creates fractions like 2/10)
        const decimalPlace = i - dotIndex;
        const denominator = '1' + '0'.repeat(decimalPlace);
        result.push(char + '/' + denominator);
      }
    }
  }
  return result.join(' + ');
};

console.log(expandedForm(22.20)); // Output: "20 + 2 + 2/10"
