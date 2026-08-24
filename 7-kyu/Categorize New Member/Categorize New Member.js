const openOrSenior = data => {
    let result = [];
    for(const char of data){
        if(char[0] >= 55 && char[1] > 7){
            result.push("Senior")
        } else {
            result.push("Open")
        }
    } 
    return result
}
console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))