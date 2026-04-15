function capitals(word) {
  let total = []
  for(let i = 0; i < word.length; i++){
    if(word[i] == word[i].toUpperCase() ){
      total.push(i)
    }
  }
  return total
}