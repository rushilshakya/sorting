let swaps = 0;
let comarisons = 0;

function bubbleSort(array) {
  /* your code here */
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      swap(array, j);
    }
  }
  return array;
}
function swap(array, i) {
  if (array[i] > array[i + 1]) {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
  } else {
  }
}
