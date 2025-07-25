function reverseWords(str) {
  // Go for it
   return str
     .split(/(\s+)/)
      .map(part => part.split('').reverse().join(''))
     .join('');
}