function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  const merged = [];
  let indexL = 0;
  let indexR = 0;

  while (indexL < sortedLeft.length || indexR < sortedRight.length) {
    const numL = indexL < sortedLeft.length ? sortedLeft[indexL] : Infinity;
    const numR = indexR < sortedRight.length ? sortedRight[indexR] : Infinity;

    if (numL < numR) {
      merged.push(numL);
      indexL++;
    } else {
      merged.push(numR);
      indexR++;
    }
  }

  return merged;
}

console.log(mergeSort([5, 4, 8, 2, 3, 1]));
