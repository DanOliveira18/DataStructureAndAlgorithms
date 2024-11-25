const recursiveBinarySearch = () => {
  // return the target index, or -1 if not found
  const binarySearch = (
    arr: number[],
    target: number,
    low: number,
    high: number
  ): number => {
    // base case
    if (
      low > high ||
      high >= arr.length ||
      (low === high && arr[high] !== target)
    ) {
      return -1;
    }

    const middle = Math.floor((low + high) / 2);

    if (target === arr[middle]) return middle;
    if (target > arr[middle])
      return binarySearch(arr, target, middle + 1, high);
    if (target < arr[middle]) return binarySearch(arr, target, low, middle);

    return -1;
  };

  console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 0, 9));
};

recursiveBinarySearch();
