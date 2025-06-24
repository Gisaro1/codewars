function points(games) {
let total = 0;
  for(let game of games){
    let [x,y] = game.split(":").map(Number);
    if ( x > y){
      total +=3;
    } else if( x === y){
      total +=1;
    } else {
     total +=0; 
    }
    
  }
  return total;
}