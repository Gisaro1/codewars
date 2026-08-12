const number = busStops => {
  return busStops.reduce((total, [enter,out]) => total + (enter - out, 0));
}
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))
