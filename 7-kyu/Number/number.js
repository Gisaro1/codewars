const number = busStops => {
  let enter = []
  let out = []
  for(let i = 0; i < busStops.length;i++){
    let char = busStops[i];
    enter.push(char[0])
    out.push(char[1])
  }
  let inn = enter.reduce((num,acc) => num + acc, 0)
  let oot = out.reduce((num,acc)=> num +  acc,0)
  return inn - oot
}
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))
