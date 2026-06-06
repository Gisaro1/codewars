function shorterestTime(n,m,speeds) {
const [a,b,c,d] = speeds;

const walkOnly = n * d;
const fromN =Math.abs((n-m) * a + 2 * b + c + 2 + n + a);
const fromM =Math.abs((n-m) * d + 2 * b + c + 2 + m + a);

return Math.min(walkOnly,fromN,fromM)
}
console.group(shorterestTime(4,5,[1,2,3,10]))