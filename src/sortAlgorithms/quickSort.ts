const quicksort = () => {
  const qs = (arr: number[]): number[] => {
    //Caso base
    if (arr.length < 2) {
      return arr;
    }
    let lower: number[] = [];
    let higher: number[] = [];
    let pivot = Math.floor(arr.length / 2);

    for (let value of arr) {
      if (value > arr[pivot]) higher.push(value);
      else if (value < arr[pivot]) lower.push(value);
    }

    // Caso recursivo
    lower = qs(lower);
    higher = qs(higher);

    return [...lower, arr[pivot], ...higher];
  };

  console.log(qs([1, 4, 2, 5, 3, 6, 8, 7, 9, 0, -5, -2, -8, -12, -25]));
};

quicksort();

// Sempre lembrar de pensar primeiro no caso base, depois no caso recursivo.
