function getMiddle(s) {
  //Code goes here!
   let abt = s.length;
  let middle = Math.floor(abt / 2)
  if (abt % 2 === 0){
    return s.substring(middle -1, middle +1);
  } else {
    return s.substring(middle,middle +1);
  }
}