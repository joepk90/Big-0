function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function (number) {
        console.log(number); // O(n)
    });

    console.log('and these are their sums:');
    numbers.forEach(function (firstNumber) {
        numbers.forEach(function (secondNumber) {
            console.log(firstNumber + secondNumber); // O(n^2)
        });
    });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])

// BIG O(n + n^2)

// Rule 4: Drop Non Dominants
// BIG O(n^2)




// another example of dropping non dominents
// the main factor to consider here is the X^2. The arguments could be irrelivent in comparison to what x might be.
// BIG O(x^2+3x+100+x/2)
// BIG O(x^2)