const isValidWalk = walk =>{
    return walk.length === 10 && walk.filter(d => d === 'n').length  === walk.filter(d=> d==='s').length  && walk.filter(d => d === 'w').length  === walk.filter(d=> d === 'e').length 
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))