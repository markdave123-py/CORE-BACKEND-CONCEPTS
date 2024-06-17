const swap = (array, i, j) => {
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const partition = (arr, low, high) => {
  i = low - 1;
  pivot = arr[high];

  for (j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i += 1;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
};

const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    let partitioned = partition(arr, low, high);
    console.log(arr)
    quickSort(arr, low, partitioned - 1);
    quickSort(arr, partitioned + 1, high);
  }
};
let arrQuick = [5, 3, 1,8,9,0,17, 4];
quickSort(arrQuick);
console.log(arrQuick);

const merge = (arr, p, q, r) => {
  n1 = q - p + 1;
  n2 = r - q;
  let l = new Array(n1);
  let R = new Array(n2);
  for (let i = 0; i < n1; i++) {
    l[i] = arr[p + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[q +1 + j];
  }
  // l[n1 + 1] = Infinity;
  // R[n2 + 1] = Infinity;

  let i1 = 0;
  let j1 = 0;

  let k = p;

  while (i1 <n1 && j1 < n2) {
    if (l[i1] <= R[j1]) {
      arr[k] = l[i1];
      i1 += 1;
    } else {
      arr[k] = R[j1];
      j1 += 1;
    }
    k += 1;
  }

  while (i1 < n1) {
    arr[k] = l[i1]
    i1++;
    k++;
  }

  while (j1 < n2) {
    arr[k] = R[j1]
    j1++
    k++
  }
};

const mergeSort = (arr, p, r) => {

  if (arr.length <= 1) {
    return arr
  }
  if (p < r) {
    q = Math.floor((p + r) / 2);
    mergeSort(arr, p, q);
    mergeSort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
};

// let arr = [4, 3, 1, 5, 6];
// mergeSort(arr, 0 ,4);
// console.log(arr)


const heapSort = (arr) => {};



// const func = (n) => {
//   r = 0;
//   for (let i = 1; i < n; i++) {
//     for (let j = i + 1; j <= n; j++) {
//       for (let k = 1; k <= j; k++) {
//         r += 1;
//       }
//     }
//   }

//   return `${n} ${r}`;
// };