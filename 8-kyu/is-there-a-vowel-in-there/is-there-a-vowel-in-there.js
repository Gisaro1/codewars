function isVow(a){
  return a.map(num => {
    if (num === 97) return 'a';
    if (num === 101) return 'e';
    if (num === 105) return 'i';
    if (num === 111) return 'o';
    if (num === 117) return 'u';
    return num;
  }) // your code here
}