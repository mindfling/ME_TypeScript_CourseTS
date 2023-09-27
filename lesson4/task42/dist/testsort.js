"use strict";
const unsorted = [251, 26, 26, 30, 215, 25, 0, 125];
console.log('unsorted: ', unsorted);
const defsort = unsorted.sort();
console.log('defsort: ', defsort);
const sortedfs = unsorted.sort((first, second) => (first - second));
console.log('sorted: ', sortedfs);
const sorted = unsorted.sort((first, second) => {
    if (first > second) {
        return 1;
    }
    if (first < second) {
        return -1;
    }
    return 0;
});
console.log('sorted: ', sorted);
