function findAverage(array) {
  if (!array || array.length === 0 )
    return 0;
let total = 0;
  for ( let i = 0; i < array.length ; i++){
     total += array[i]
}
 let average = total / array.length;
return average;
 
  }
​