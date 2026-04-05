function towerBuilder(n) {
  let result = [];
  for(let i = 0; i < n;i++){
    let space = ' '.repeat(n-i-1);
    let star = '*'.repeat(2 * i + 1)
    result.push(space + star + space)
  }
 return result
}
​