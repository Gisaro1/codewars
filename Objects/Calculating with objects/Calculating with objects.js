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
  add(other){
    return this.num + other.num
  }
  sub(other){
    return this.num - other.num
  }
  mult(other){
    return this.num * other.num
  }
  div(other){
    return this.num / other.num
  }
  math(other){
    return Math.floor(other)
  }
}
const x = new Num(100);
const y = new Num(5);
const a = x.add(y)
const s = x.sub(y)
const m = x.mult(y);
const d = x.div(y)
const ma = x.math(100.5)
x.toString() == "the number is " + this.num
x.valueOf() == {num: this.num}
console.log(x)

console.log(ma)
