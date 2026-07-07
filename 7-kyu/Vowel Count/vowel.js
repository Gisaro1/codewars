const getCount = str =>{
    const vowel = str.replace(/[^aeiuo]/g,'');
    const count = vowel.length
    return count
}

console.log(getCount('gisaro'))