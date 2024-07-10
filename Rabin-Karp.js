function RabinKarp(pattern, text) {
    const m = pattern.length; // Length of the pattern
    const n = text.length; // Length of the text
    const d = 256; // Number of characters in the input alphabet
    const q = 101; // A prime number (helps avoid overflow)

    let p = 0; // Hash value for the pattern
    let t = 0; // Hash value for the text
    let h = 1; // Precomputed value for rolling hash

    // Calculate the hash value for pattern and the first window of text
    for (let i = 0; i < m - 1; i++) {
        h = (h * d) % q;
    }
    for (let i = 0; i < m; i++) {
        p = (d * p + pattern.charCodeAt(i)) % q;
        t = (d * t + text.charCodeAt(i)) % q;
    }

    // Slide the pattern over the text one by one
    for (let i = 0; i <= n - m; i++) {
        // Check the hash values of the current window of text and pattern
        if (p === t) {
            let j;
            for (j = 0; j < m; j++) {
                if (text.charAt(i + j) !== pattern.charAt(j)) {
                    break;
                }
            }
            // If p is equal to t and pattern[0...m-1] matches text[i, i+1, ...i+m-1]
            if (j === m) {
                console.log(`Pattern found at index ${i}`);
            }
        }
        // Calculate the hash value for the next window of text
        if (i < n - m) {
            t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;
            if (t < 0) {
                t += q; // Ensure positive hash value
            }
        }
    }
}

// Example usage:
const text = "THIS IS A TEST TEXT";
const pattern = "TEST";
RabinKarp(pattern, text);
