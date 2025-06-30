function oddOrEven(array) {
   //enter code here
   if ( array === 0){
       return "even";
   }
    let total = 0;
    for( let i = 0 ; i < array.length ; i++){
       total += array[i];
    }
    if ( total % 2 === 0){
        return "even";
    } else{
        return"odd";
    }
}