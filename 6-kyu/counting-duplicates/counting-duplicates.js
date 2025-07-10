function duplicateCount(str) {  // Changed function name to match test
    const lowerStr = str.toLowerCase();
    const charCount = {};
    let count = 0;
​
    for (let i = 0; i < lowerStr.length; i++) {
        const char = lowerStr[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
​
    for (const char in charCount) {
        if (charCount[char] > 1) {
            count++;
        }
    }
​
    return count;
}