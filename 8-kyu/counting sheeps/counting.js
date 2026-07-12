const countSheeps = sheep => {
    let total = 0;
    for(let char of sheep){
        if(char === true){
            total += 1
        }
    }
    return total;
}
console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]))