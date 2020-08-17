/**
 * 0(n^2): Quadratic Time:
 * Everytiem the number of elements increses, the operations increase quadratically
 */

const quadraticTime = function () {

    const boxes = ['a', 'b', 'c', 'd', 'e'];
    function logAllPairsOfArray(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                console.log(array[i], array[j])
            }
        }
    }

    logAllPairsOfArray(boxes)
}

export default quadraticTime;



// 0(n * n)
// 0(n^2)