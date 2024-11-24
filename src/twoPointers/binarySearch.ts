const twoPointersBinarySearch = () => {
  // retorna o index do elemento, caso não encontre retorna -1;
  const binarySearch = (arr: number[], target: number): number => {
    let low = 0;
    let high = arr.length - 1;
    let middle = 0;

    while (low <= high && high < arr.length) {
      middle = Math.floor((low + high) / 2);
      if (target == arr[middle]) return middle;
      if (target > arr[middle]) low = middle + 1;
      else if (target < arr[middle]) high = middle;
    }

    return -1;
  };

  console.log(
    binarySearch(
      [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20,
      ],
      12
    )
  );
};
twoPointersBinarySearch();
