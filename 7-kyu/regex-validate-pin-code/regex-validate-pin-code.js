function validatePIN(pin) {
  // Check for valid length
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
​
  // Check if all characters are digits
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] < '0' || pin[i] > '9') {
      return false;
    }
  }
​
  // If we passed all checks, it's valid
  return true;
}
​