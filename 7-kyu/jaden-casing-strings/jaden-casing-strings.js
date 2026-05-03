Object.defineProperty(String.prototype, 'toJadenCase', {
  value: function() {
    let str = this.split(' ');
    let result = [];
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char.length === 0) {
        result.push(char);
      } else {
        let firstChar = char[0].toUpperCase();
        let rest = char.slice(1).toLowerCase();
        result.push(firstChar + rest);
      }
    }
    return result.join(' ');
  },
  enumerable: false,
  configurable: true,
  writable: true
});
​
// Test it:
console.log('hey my name is cccxlvii'.toJadenCase()); 
// "Hey My Name Is Cccxlvii"