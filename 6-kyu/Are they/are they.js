const comp = (array1,array2)=>{
let result = [];
for(let i = 0; i < array1.length ; i++){
    let char = array1[i];
    result.push(Math.pow(char,2))
    for(let j = 0; j < array2.length; j++){
        let chr = array2[j];
        if(result.includes(chr)){
            return true
        } else{
            return false
        }
    }
}
}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]))