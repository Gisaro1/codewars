Array.prototype.first = function() {
    return this[0];
};
Array.prototype.last = function() {
    return this[this.length - 1]
};
var a = [1,2,3,4,5];

console.log(a.first());
console.log(a.last())