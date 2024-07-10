function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                break;
            }
            if (j === short.length - 1) {
                count++;
            }
        }
    }
    return count;
}

// Example usage:
const longText = "lorie loled";
const pattern = "lo";
const occurrences = naiveSearch(longText, pattern);
console.log(`Occurrences of "${pattern}" in "${longText}": ${occurrences}`);
