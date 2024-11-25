## Sort Algorithms

Sorting algorithms are used to, as the name suggests, sort things, in this case, arrays. In most cases you will not need to implement a sorting algorithm, the languages ​​already provide their sorting functions in their base kit, but it's good to know because it's a topic that frequently comes up in interviews, and it's good to know the differences and implement at least one of them. Here I will exemplify some of the main sorting algorithms.

### Bubble sort

The bubble sort algorithm compares the current element with the next, if the current element is greater than the next, it swaps them, it repeats this process until the array is sorted. It is not effective, its performance is poor and it is not used on a daily basis, only for teaching purposes.

**Best case**: O(n) when the list is already ordered.

**Medium case**: O(n^2) it will be necessary to go through the entire array, and for each element go through the entire array again

**Worst case**: O(n^2) it will be necessary to go through the entire array, and for each element go through the entire array again

### Quick sort

The most common algorith, the quick sort choose a element from the array and set it as a pivot, then compare all the other elements placing all larger elements after the pivot, and all smaller elements before the pivot, this way your pivot will be in the correct position, repeat the same process for the array containing the elements smaller than the pivot, and for the array containing the elements larger than the pivot.

**Best case**: O(n log n): When the pivot is chosen correctly, the array will be divided into 2 parts, larger and smaller than the pivot.

**Medium case**: O(n log n): When the pivot is chosen correctly, the array will be divided into 2 parts, larger and smaller than the pivot.

**Worst case**: O(n^2): When the pivot is the higher or lower element from the array
