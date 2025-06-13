function doubleChar(str) {
  return str.split('').reduce((acc, char) => acc + char + char, '');
}
​