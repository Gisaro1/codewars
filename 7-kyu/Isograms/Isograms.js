const isIsogram = str => new Set(str.toLowerCase()).size === str.length
console.log(isIsogram("Dermatoglyphicis"))