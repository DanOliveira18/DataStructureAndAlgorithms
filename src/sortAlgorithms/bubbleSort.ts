// Sempre ordena o maior elemento para o fim do array

// melhor caso: O(n) quando o array ja está ordenado
// pior e medio caso: O(n^2)
const bubbleSort = () => {
  const bs = (arr: number[]): number[] => {
    if (arr.length < 2) return arr;

    for (let i = arr.length - 1; i > 0; i--) {
      let swap = false;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          const aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
          swap = true;
        }
      }
      if (!swap) break;
    }

    return arr;
  };

  console.log(bs([3, 4, 2, 5, 1, 6, 8, 7, 0, 12, -4, -1, -9]));
};
bubbleSort();
