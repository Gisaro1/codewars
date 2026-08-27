class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    add(other){
        return new Vector(this.x + other.x, this.y + other.y)
    }
}

const a = new Vector(1,2);
const b = new Vector(3,4)
const c = a.add(b)
console.log(c)