/**
 * Big 0 Algorithms:
 * The Big 0 is not measured by seconds, but the size of the input compared to the number of operations
 * A things grow larger and larger, does it scale?
 */

import linearTime from 'linear-time';
import constantTime from '.constant-time';
import factorialTime from './factorial-time';

console.log('Big 0 Algorithms Started');

constantTime();
linearTime();
factorialTime(4);
quadraticTime(4);

console.log('Big 0 Algorithms Ended');

