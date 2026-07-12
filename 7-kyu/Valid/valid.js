const validatePIN  = pin => {
if(pin.length !== 4 && pin.length){
    return false;
}
return pin.split('').every(char => char >= '0' && char <= '9')
}
console.log(validatePIN('123a'))