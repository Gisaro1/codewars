function removeEveryOther(arr){
   let orginal = arr.filter((og,char) => char % 2 === 0)
   return orginal
}