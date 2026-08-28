class Num {
  constructor(num){
    this.num=num;
  }
  toString() {
    return "The number is " + this.num;
  }
  valueOf() {
    return {num: this.num};
  }
  [Symbol.toPrimitive](hint){
    if(hint === "number" || hint === "default" ){
        return this.num
    }
      return this.toString
  }
}

const x = new Num(100);
const y = new Num(5);
x + y == 105;
x*y == 500;
x-y == 95
x/y == 20
Math.floor(new Num(100.5)) == 100
console.log(new Num(5) + new Num(5))