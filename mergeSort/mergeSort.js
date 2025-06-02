// Merge Sort Algorithm

const array = [18, 5, 23, 1, 5, 17, 11];

function mergeSort(arr) {
  // Base / Guard Case
  if (arr.length <= 1) {
    return arr;
  }

  // split in half
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // keep splitting halves (recursion)
  const leftArray = mergeSort(left);
  const rightArray = mergeSort(right);

  // when the recursion reaches the base case, merge the sorted halves
  // it then goes back up from there, always using the newly sorted halves
  return merge(leftArray, rightArray);
}

function merge(array1, array2) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // merge the two arrays using two index pointers to compare
  while (leftIndex < array1.length && rightIndex < array2.length) {
    if (array1[leftIndex] < array2[rightIndex]) {
      result.push(array1[leftIndex]);
      leftIndex++;
    } else {
      result.push(array2[rightIndex]);
      rightIndex++;
    }
  }

  // if there are remaining elements in either array, add them to the result
  return result
    .concat(array1.slice(leftIndex))
    .concat(array2.slice(rightIndex));
}

console.log(mergeSort(array));
