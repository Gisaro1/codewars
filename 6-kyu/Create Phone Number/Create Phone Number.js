const createPhoneNumber = numbers =>{
  if(numbers.length!== 10){
    return false;
  } else{
     return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  }
};
console.log(createPhoneNumber([1, 4, 3, 4, 5, 6, 7, 8, 9, 0]))