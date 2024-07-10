function preprocess(pattern) {
    let table = [];
    for (let i = 0; i < 256; i++) {
        table[i] = pattern.length;
    }
    for (let i = 0; i < pattern.length - 1; i++) {
        table[pattern.charCodeAt(i)] = pattern.length - 1 - i;
    }
    return table;
}

function boyerMooreSearch(text, pattern) {
    let table = preprocess(pattern);
    let shift = pattern.length;

    while (text.length >= shift) {
        if (text.substr(shift - pattern.length, pattern.length) === pattern) {
            return text.length - shift;
        }
        shift += Math.max(1, table[text.charCodeAt(shift - pattern.length)]);
    }

    return -1;
}

// Example usage:
const text = "This is a test text";
const pattern = "test";
const result = boyerMooreSearch(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log("Pattern not found in the text.");
}
