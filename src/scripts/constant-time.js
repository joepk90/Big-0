/**
 * 0(1): Constant Time:
 * As the Array size increases, the number of operations does not increase - it stays constant.
 */

const constantTime = function () {

    console.log('Example Big 0 Notation: Constant Time Algorithm - 0(1)');

    const array = new Array(1000).fill('value');

    array.forEach((element, index) => {

        if (index === 1) {
            console.log(element);
        }

    });

};

export default constantTime;