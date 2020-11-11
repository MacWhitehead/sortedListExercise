let array1 = [10, 4, 5];
let array2 = [10, 4, 7, 9, 2, 3, 5];
let array3 = [45, 67, 4, 10, 12, 22];

function selectionSort(array) {
  let sortedList = [];
  while (array.length > 0) {
    let minNumber = array[0];
    let minNumberIndex = 0;
    for (let i = 1; i < array.length; i++) {
      let b = array[i];
      if (b < minNumber) {
        minNumber = b;
        minNumberIndex = i;
      }
    }
    sortedList.push(minNumber);
    array.splice(minNumberIndex, 1);
  }
  return sortedList;
}