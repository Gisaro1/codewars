const findUniq = arr =>{
    let text = arr.find(char =>{
       let lower =  char.toLowerCase();
       let other = arr.find(txt => !txt.toLowerCase().includes(lower[0]));
       if(other){
        return arr.filter(chr => chr.toLowerCase().includes(lower[0])).length === 1;
       }
    })
    return text
}
console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'Billy', 'Aaaa', 'AaAaAa', 'a' ]))
