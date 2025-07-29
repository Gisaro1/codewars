function digPow(n, p){
  const result = `${n}`.split('').reduce((sum,i) => sum += i ** p++,0)
  return result % n ? -1:result/n
}