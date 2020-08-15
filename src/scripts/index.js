/**
 * Big 0 Algorithms:
 * The Big 0 is not measured by seconds, but the size of the input compared to the number of operations
 * A things grow larger and larger, does it scale?
 */

import On from './0(n)';
import O1 from './0(1)';
import factorial_time from './factorial';

console.log('Big 0 Algorithms Started');

O1();
On();
factorial_time(4);

console.log('Big 0 Algorithms Ended');

