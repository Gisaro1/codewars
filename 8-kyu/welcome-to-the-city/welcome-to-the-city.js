function sayHello( name, city, state ) {
  const fullName = name.join(' '); // Join with space instead of comma
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}