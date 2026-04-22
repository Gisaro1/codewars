function getMiddle(s) {
  let length = s.length
  let average = Math.floor(length /2)
  if(length % 2 === 0){
    return s.substring(average-1,average+1)
  } else{
    return s.substring(average,average+1)
  }
}