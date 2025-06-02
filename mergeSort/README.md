# Merge Sort Algorithm

**Recursion**: Merge sort inherently uses recursion to divide the array into smaller sub-arrays. Understanding how recursive functions work, including the base case and the recursive step, is crucial. For beginners, grasping the flow of execution in a recursive function can be tricky.

**Divide and Conquer**: The core idea of merge sort is to divide the problem into smaller, more manageable subproblems, solve them independently, and then combine their solutions. This "divide and conquer" strategy requires a specific way of thinking about problem-solving.

**Merging Logic**: The crucial part of merge sort is the merge function. This function takes two already sorted sub-arrays and merges them into a single sorted array. Implementing this logic correctly, handling edge cases (like one sub-array being exhausted before the other), and ensuring the resulting array is sorted requires careful attention to detail with loops and comparisons.

**Index Management**: Keeping track of indices while dividing the array and merging the sub-arrays can be error-prone. You need to manage the start and end points of the sub-arrays correctly in both the recursive mergeSorts and the merging process.

**Combining Recursion and Iteration**: While the dividing part is typimergeSorty done recursively, the merging step often involves iterative loops to compare and combine elements. Understanding how these two control flow mechanisms work together is important.

```python
mergeSort([18, 5, 23, 1, 5, 17, 11])
    leftArray: mergeSort([18, 5, 23])
        leftArray: mergeSort([18]) -> base case reached, returns [18]
        rightArray: mergeSort([5,23])
            leftArray: mergeSort([5]) -> base case reached, returns [5]
            rightArray: mergeSort([23]) -> base case reached, returns [23]
                merge([5],[23]) -> returns [5,23]
        merge([18],[5,23]) -> returns [5,18,23]
    rightArray: mergeSort([1,5,17,11])
        leftArray: mergeSort([1,5])
            leftArray: mergeSort([1]) -> base case reached, returns [1]
            rightArray: mergeSort([5]) -> base case reached, returns [5]
                merge([1],[5]) -> returns [1,5]
        rightArray: mergeSort([17,11])
            leftArray: mergeSort([17]) -> base case reached, returns [17]
            rightArray: mergeSort([11]) -> base case reached, returns [11]
                merge([17],[11]) -> returns [11,17]
        merge([1,5],[11,17]) -> returns [1,5,11,17]
    merge([5,18,23],[1,5,11,17]) -> returns [1,5,5,11,17,18,23]
```

_Notice how `merge()` is only called after both `leftArray` and `rightArray` are provided_
