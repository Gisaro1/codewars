const isTriangle = (a,b,c) => ((a > 0 && b > 0 && c > 0) && (a + b > c && a + c > b && b + c > a));
console.log(isTriangle(1,2,2))
