// не сорт масс чис
const unsorted: number[] = [251,26,26,30,215,25,0,125]
console.log('unsorted: ', unsorted);


const defsort: number[] = unsorted.sort();
console.log('defsort: ', defsort);

const sortedfs: number[] = unsorted.sort((first: number, second: number) => (first - second)); // ascending
console.log('sorted: ', sortedfs);

const sorted: number[] = unsorted.sort((first: number, second: number) => {
  if (first > second) {
    return 1;
  }
  if (first < second) {
    return -1;
  }
  return 0;
}); // ascending is by default sord order ->
console.log('sorted: ', sorted);

