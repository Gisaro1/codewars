const validPhoneNumber = phoneNumber =>{
let neww =  phoneNumber.split(' ');
if(neww.length !== 2 || neww[0].length !== 5 || neww[1].length !== 8 || !neww[1].includes('-') || !neww[0].includes('(') || !neww[0].includes(')')){
    return false
} else{
    return true
}

};
console.log(validPhoneNumber("(123) 456-7890"));