function sumDigPow(a, b) {
    const result = [];
    for (let num = a; num <= b; num++) {
        const digits = String(num).split('').map(Number);
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += Math.pow(digits[i], i + 1);
        }
        if (sum === num) {
            result.push(num);
        }
    }
    return result;
}