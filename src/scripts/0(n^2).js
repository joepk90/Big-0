/**
 * 0(n^2): Quadratic Time:
 * Everytiem the number of elements increses, the operations increase quadratically
 */

const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

logAllPairsOfArray(boxes)

// 0(n * n)
// 0(n^2)