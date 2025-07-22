function isPangram(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerStr = str.toLowerCase();
  return [...alphabet].every(char => lowerStr.includes(char));
}
​