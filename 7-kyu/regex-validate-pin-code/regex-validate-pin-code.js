function validatePIN (pin) {
  //return true or false
  if (pin.length === 4 || pin.length === 6){
    return pin.split('').every((num) => !isNaN(parseInt(num)))
  }
  return false;
}