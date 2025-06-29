function sumArray(array) {
if (!array  || array.length <=2) return 0;
  let Max = Math.max(...array);
  let Min = Math.min(...array);
  let Sum = 0;
  for(num of array){
    Sum += num;
  }
  return Sum - Max - Min;
}