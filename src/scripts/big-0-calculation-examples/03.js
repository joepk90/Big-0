function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); //O(1)

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]); //O(n/2)
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi'); //O(100)
    }
}

// BIG O(1 + n/2 + 100)

// organise the calculation
// BIG O(n/2 + 101)

 // drop the constants as they are insignificant compared to what n might be
// BIG O(n/2 + 1)

 // as n gets larger and larger, deviding by 2 has an decreasingly significant effect
// BIG O(n + 1)

 // drop the constants as they are insignificant compared to what n might be
// BIG O(n)