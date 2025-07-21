function findShort(s){
const words = s.split(' ');
  return words.length ? Math.min(...words.map(word => word.length)): 0;
}