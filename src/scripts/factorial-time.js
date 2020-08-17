/**
 * O(n!): Factorial Time:
 * Adding a new loop for every element
 */

const factorialTime = n => {
    let num = n;

    if (n === 0) return 1;
    for (let i = 0; i < n; i++) {
        num = n * factorialTime(n - 1); // O(n!)
    };

    console.log('Example Big 0 Notation: Factorial Algorithm - 0(n!):', num);

    return num;
};

export default factorialTime;

// O(n!)