function capitals(word) {
const indices = [];
  for(let i = 0; i < word.length; i++){
    if (word[i] !== word[i].toLowerCase()){
      indices.push(i);
    }
  }
  return indices;
};