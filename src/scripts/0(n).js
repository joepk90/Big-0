/**
 * Linear Loop:
 * As the Array size increases, the number of operations increase linearly with it...
 */

const On = function () {

    console.log('Example Big 0 Notation: Linear Algorithm - 0(n)');

    const array = new Array(1000).fill('value');

    // 0(n): Linear Time
    array.forEach(element => {
        console.log(element);
    });


};

export default On;