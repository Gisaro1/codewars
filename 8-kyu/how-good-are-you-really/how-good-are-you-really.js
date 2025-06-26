function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let total = 0;
  for ( let i = 0; i < classPoints.length ; i++){
       total += classPoints[i];
  }
  let average = total/ classPoints.length;
    if (yourPoints > average){
      return true;
  } else {
      return false;
  }
}
​