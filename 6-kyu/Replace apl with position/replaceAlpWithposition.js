const alphabetPosition = text => {
  const word = text.split('').filter(x => /[a-zA-Z]/g.test(x))
  return word.map(char => char.charCodeAt(0) - 96 ).join(' ')
}
console.log(alphabetPosition('abera '))