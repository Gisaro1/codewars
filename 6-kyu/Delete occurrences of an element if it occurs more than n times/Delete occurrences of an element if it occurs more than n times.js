const deleteNth = (arr,n) => {
    let count = {};
    let result = [];
   for(let i = 0 ; i < arr.length; i++){
    let char = arr[i];
    count[char] = (count[char] || 0) + 1
    if(count[char] <= n){
        result.push(char)
    }
   }
   return result
}
console.log(deleteNth([1,1,2,3,4,4,4,5,6,6,7,7,8,8,4,3,3,2,1,1,1,12,3,4,4,44,3,3,2,2,5,7], 9));
