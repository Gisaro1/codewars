function solution(arr){
if (!Array.isArray(arr) || arr.length === 0) return [];
  return arr.sort((a,b) => a - b)
}