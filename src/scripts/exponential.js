/**
 * O(2^n): Exponential Time:
 *
 * Slower then O(n), calcualtions grow exponential based on input
 * 
 * TODO get tree diagram
 *
 */



/**
* 
* Example Recursive Function
* 
* Big O: Exponential: O(2^n)
* 
* @param {*} number 
*/
function fibonacciRecursive(n) {

    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);

}

console.log('fibonacciRecursive Result: ', fibonacciRecursive(6));