
const unsorted: number[] = [251, 26, 26, 30, 215, 25, 0, 125]


const defaultSorted: number[] = unsorted.sort();


const sortedNumbers: number[] = unsorted.sort((first: number, second: number) =>
  (first - second)); // повозрастанию


const sorted: number[] = unsorted.sort((first: number, second: number) => {
  if (first > second) {
    return 1;
  } else if (first < second) {
    return -1;
  }
  return 0;
});




