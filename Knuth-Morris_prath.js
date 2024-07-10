function KMP(text, pattern) {
    // Compute the Longest Proper Prefix which is also a Suffix (lps) array
    const lps = new Array(pattern.length).fill(0);
    computeLPS(pattern, lps);

    let i = 0; // Index for text
    let j = 0; // Index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            j++;
            i++;
        }

        if (j === pattern.length) {
            console.log(`Pattern found at index ${i - j}`);
            j = lps[j - 1];
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
}

function computeLPS(pattern, lps) {
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
}

// Example usage:
const text = "THIS IS A TEST TEXT";
const pattern = "TEST";
KMP(text, pattern);
