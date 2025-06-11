function stringToNumber(str){
  const num = Number(str);
  return  Number.isNaN(num) ? null : num;
}
​