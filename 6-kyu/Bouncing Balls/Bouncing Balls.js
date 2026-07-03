const bouncingBall = (h,  bounce,  window)=>{
    if(h < 0 || 0 > bounce || bounce >= 1 || window >= h) {
        return -1;
    }
    let total = 1;
    h = h * bounce;
     while(h > window){
        total += 2;
        h = h * bounce;
     }
     return total;
}
console.log(bouncingBall(3,0.5,2))